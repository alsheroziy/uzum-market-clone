import { StarIcon } from "@heroicons/react/16/solid";

export default function ProductRating() {
  return (
	<div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
    <StarIcon className="w-3.5 h-3.5 text-yellow-500" />
    <span>4.9</span>
    <span>(120 sharhlar)</span>

  </div>
  )
}
