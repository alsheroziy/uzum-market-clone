export default function ProductCardFooter() {
  return (
	<div className="flex items-center justify-between mt-2 cursor-pointer">
		<p className="text-sm">200,000</p>
		<div className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer">
			<img src="/icons/add-cart.svg" alt="add-cart" className="w-7" />
		</div>
	</div>
  )
}
