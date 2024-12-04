import ReviewCard from "@/components/ReviewCard";
import ReviewHeader from "@/components/ReviewHeader";
import { useReviews } from "@/hooks/useReviews";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const Reviews = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const {
    reviews,
    sortBy,
    handleSort,
    handleDeleteReview,
    handleApproveReview,
    handleRejectReview
  } = useReviews();

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordDialog(false);
      setPassword("");
      toast({
        title: "Mode administrateur activé",
        description: "Vous avez maintenant accès aux fonctionnalités d'administration.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erreur d'authentification",
        description: "Mot de passe incorrect.",
      });
    }
  };

  const toggleAdminMode = () => {
    if (!isAdmin) {
      setShowPasswordDialog(true);
    } else {
      setIsAdmin(false);
      toast({
        title: "Mode client activé",
        description: "Vous êtes maintenant en mode client.",
      });
    }
  };

  const approvedReviews = reviews.filter(review => review.status === 'approved');
  const averageRating = approvedReviews.length > 0 
    ? (approvedReviews.reduce((acc, review) => acc + review.rating, 0) / approvedReviews.length).toFixed(1)
    : '0.0';

  const displayedReviews = reviews
    .filter(review => !isAdmin ? review.status === 'approved' : true)
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ReviewHeader
            averageRating={averageRating}
            sortBy={sortBy}
            onSort={handleSort}
            onScrollToReviews={() => {}}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {displayedReviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={index}
                onDelete={handleDeleteReview}
                onApprove={() => handleApproveReview(review.id)}
                onReject={() => handleRejectReview(review.id)}
                isAdmin={isAdmin}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={toggleAdminMode}
              variant="outline"
              className="bg-coffee text-white hover:bg-coffee-dark"
            >
              {isAdmin ? "Mode Client" : "Mode Admin"}
            </Button>
          </div>

          <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Authentification requise</DialogTitle>
                <DialogDescription>
                  Veuillez entrer le mot de passe administrateur pour accéder au mode admin.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handlePasswordSubmit();
                    }
                  }}
                />
                <div className="flex justify-end gap-4">
                  <Button onClick={() => setShowPasswordDialog(false)} variant="outline">
                    Annuler
                  </Button>
                  <Button onClick={handlePasswordSubmit}>
                    Valider
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Reviews;