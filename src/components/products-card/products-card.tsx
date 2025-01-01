import ProductCardFooter from './product-card-footer'
import ProductRating from './product-rating'

export default function ProductsCard() {
	return (
		<div className='max-w-[232px] w-full hover:shadow-lg transition cursor-pointer rounded-xl'>
			<div>
				<img
					src='https://images.uzum.uz/csrem9bvgbkpg1nmchi0/t_product_540_high.jpg#1735733773440'
					className='rounded-xl hover:rounded-b-none transition'
				/>
			</div>
			<div className='p-2 pt-3'>
				<p className='line-clamp-2 text-sm'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
					voluptates{' '}
				</p>
				<ProductRating />
				<ProductCardFooter />
			</div>
		</div>
	)
}
