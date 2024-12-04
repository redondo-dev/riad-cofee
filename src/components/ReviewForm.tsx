import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReviewStars from "./ReviewStars";

interface ReviewFormProps {
  onSubmit: (review: { name: string; rating: number; comment: string; }) => void;
}

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newReview);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-16 bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-serif text-2xl text-coffee mb-6">Laissez votre avis</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-coffee-dark mb-2">Votre nom</label>
          <input
            type="text"
            id="name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-2 border border-cream rounded focus:outline-none focus:border-coffee"
            maxLength={50}
            required
          />
        </div>

        <div>
          <label className="block text-coffee-dark mb-2">Note</label>
          <ReviewStars 
            rating={newReview.rating} 
            onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-coffee-dark mb-2">Votre commentaire</label>
          <Textarea
            id="comment"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="min-h-[100px]"
            maxLength={500}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            {newReview.comment.length}/500 caractères
          </p>
        </div>

        <Button 
          type="submit"
          className="bg-coffee hover:bg-coffee-dark text-white"
          disabled={!newReview.name || !newReview.rating || !newReview.comment}
        >
          Publier mon avis
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;