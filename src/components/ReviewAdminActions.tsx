import { Button } from "./ui/button";
import { Check, X } from "lucide-react";

interface ReviewAdminActionsProps {
  onApprove: () => void;
  onReject: () => void;
}

const ReviewAdminActions = ({ onApprove, onReject }: ReviewAdminActionsProps) => {
  return (
    <div className="mt-4 flex gap-2 justify-end">
      <Button
        onClick={onApprove}
        className="bg-green-500 hover:bg-green-600 text-white"
        size="sm"
      >
        <Check className="w-4 h-4 mr-1" /> Approuver
      </Button>
      <Button
        onClick={onReject}
        variant="destructive"
        size="sm"
      >
        <X className="w-4 h-4 mr-1" /> Rejeter
      </Button>
    </div>
  );
};

export default ReviewAdminActions;