interface ReviewStatusBadgeProps {
  status: 'pending' | 'approved' | 'rejected';
}

const ReviewStatusBadge = ({ status }: ReviewStatusBadgeProps) => {
  switch (status) {
    case 'pending':
      return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">En attente</span>;
    case 'rejected':
      return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Rejeté</span>;
    default:
      return null;
  }
};

export default ReviewStatusBadge;