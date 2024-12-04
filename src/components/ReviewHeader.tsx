import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ReviewHeaderProps {
  averageRating: string;
  sortBy: 'date' | 'rating';
  onSort: (value: string) => void;
  onScrollToReviews: () => void;
}

const ReviewHeader = ({ averageRating, sortBy, onSort, onScrollToReviews }: ReviewHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 className="section-title mb-4 md:mb-0">
        <a href="#reviews" onClick={onScrollToReviews} className="cursor-pointer hover:text-coffee-dark">
          Avis de nos clients
        </a>
      </h2>
      <div className="flex items-center gap-4">
        <div className="bg-white px-4 py-2 rounded-lg">
          <span className="font-bold">Note moyenne : {averageRating}/5</span>
        </div>
        <Select onValueChange={onSort} defaultValue={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="rating">Note</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ReviewHeader;