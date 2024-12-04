import { Star } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

const ReviewStars = ({ rating, onRatingChange, readonly = false }: ReviewStarsProps) => {
  const fullStars = Math.floor(rating);

  const handleStarClick = (index: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < fullStars ? 'fill-gold text-gold' : 'text-gray-300'} 
            ${!readonly ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
          onClick={() => handleStarClick(i)}
        />
      ))}
    </div>
  );
};

export default ReviewStars;