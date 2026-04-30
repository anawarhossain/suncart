
import { IoMdStar } from "react-icons/io";

const StarRating = ({ rating }) => {
  return (
    <div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star}>
            <IoMdStar className="text-orange-300" />
          </div>
        ))}
        <span className="text-sm text-gray-500 ml-1">({rating})</span>
      </div>
    </div>
  );
};

export default StarRating;
