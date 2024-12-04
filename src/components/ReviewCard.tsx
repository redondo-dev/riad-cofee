import { useState } from "react";
import { Trash2 } from "lucide-react";
import ReviewStars from "./ReviewStars";
import ReviewStatusBadge from "./ReviewStatusBadge";
import ReviewAdminActions from "./ReviewAdminActions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Review } from "@/hooks/useReviews";

interface ReviewCardProps {
  review: Review;
  index: number;
  onDelete: (index: number) => void;
  onApprove: () => void;
  onReject: () => void;
  isAdmin: boolean;
}

const ADMIN_PASSWORD = "cafe123";

const ReviewCard = ({ review, index, onDelete, onApprove, onReject, isAdmin }: ReviewCardProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onDelete(index);
      handleDialogClose();
    } else {
      setError(true);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setPassword("");
    setError(false);
  };

  const formattedDate = new Date(review.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      {isAdmin && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
              <Trash2 size={20} />
            </button>
          </DialogTrigger>
          <DialogContent onInteractOutside={handleDialogClose} onEscapeKeyDown={handleDialogClose}>
            <DialogHeader>
              <DialogTitle>Authentification requise</DialogTitle>
              <DialogDescription>
                Veuillez entrer le mot de passe administrateur pour supprimer cet avis.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className="w-full p-2 border rounded"
                placeholder="Mot de passe"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleDelete(e as unknown as React.MouseEvent);
                  }
                }}
              />
              {error && (
                <p className="text-red-500 text-sm">Mot de passe incorrect</p>
              )}
              <div className="flex justify-end gap-4">
                <Button onClick={handleDialogClose} variant="outline">
                  Annuler
                </Button>
                <Button onClick={handleDelete} variant="destructive">
                  Supprimer
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-coffee-dark">{review.name}</h3>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
        <ReviewStatusBadge status={review.status} />
      </div>

      <div className="mb-4">
        <ReviewStars rating={review.rating} readonly />
      </div>

      <p className="text-gray-700">{review.comment}</p>

      {isAdmin && review.status === 'pending' && (
        <ReviewAdminActions onApprove={onApprove} onReject={onReject} />
      )}
    </div>
  );
};

export default ReviewCard;