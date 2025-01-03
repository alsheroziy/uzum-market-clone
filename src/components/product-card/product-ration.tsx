import { StarIcon } from "@heroicons/react/20/solid";

export const ProductRating = () => {
  return (
    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
      <StarIcon className="text-yellow-500 w-3.5 h-3.5" />
      <span>4.9</span>
      <span>(120 sharhlar)</span>
    </div>
  );
};
