import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const FORBIDDEN_WORDS = ['insulte', 'grossier', 'merde'];

const defaultReviews: Review[] = [
  {
    id: '1',
    name: "Sophie Martin",
    rating: 5,
    comment: "Le meilleur café de Marseille ! L'ambiance est chaleureuse et les pâtisseries sont divines.",
    date: "2024-03-15",
    status: 'approved'
  },
  {
    id: '2',
    name: "Thomas Dubois",
    rating: 4.5,
    comment: "Un endroit magnifique avec un service impeccable. Le cappuccino est parfait !",
    date: "2024-03-12",
    status: 'approved'
  }
];

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');
  const { toast } = useToast();

  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(defaultReviews);
      localStorage.setItem("reviews", JSON.stringify(defaultReviews));
    }
  }, []);

  const handleSubmit = (newReview: { name: string; rating: number; comment: string; }) => {
    if (!newReview.name || !newReview.rating || !newReview.comment) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs et attribuer une note.",
        variant: "destructive",
      });
      return;
    }

    if (newReview.comment.length > 500) {
      toast({
        title: "Erreur",
        description: "Le commentaire ne doit pas dépasser 500 caractères.",
        variant: "destructive",
      });
      return;
    }

    if (FORBIDDEN_WORDS.some(word => newReview.comment.toLowerCase().includes(word))) {
      toast({
        title: "Erreur",
        description: "Votre commentaire contient des mots inappropriés.",
        variant: "destructive",
      });
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    toast({
      title: "Merci !",
      description: "Votre avis a été soumis et sera publié après modération.",
    });
  };

  const handleSort = (value: string) => {
    setSortBy(value as 'date' | 'rating');
    const sortedReviews = [...reviews].sort((a, b) => {
      if (value === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.rating - a.rating;
    });
    setReviews(sortedReviews);
  };

  const handleDeleteReview = (index: number) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    
    toast({
      title: "Avis supprimé",
      description: "L'avis a été supprimé avec succès.",
    });
  };

  const handleApproveReview = (reviewId: string) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId ? { ...review, status: 'approved' as const } : review
    );
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    toast({
      title: "Avis approuvé",
      description: "L'avis a été approuvé et est maintenant visible.",
    });
  };

  const handleRejectReview = (reviewId: string) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId ? { ...review, status: 'rejected' as const } : review
    );
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    toast({
      title: "Avis rejeté",
      description: "L'avis a été rejeté.",
    });
  };

  return {
    reviews,
    sortBy,
    handleSubmit,
    handleSort,
    handleDeleteReview,
    handleApproveReview,
    handleRejectReview
  };
};