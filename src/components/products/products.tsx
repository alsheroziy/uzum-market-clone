import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import ProductsCard from '../products-card/products-card'

export default function Products() {
	return (
		<div className='mt-4'>
			<Link to={'/category/id'} className='flex items-center gap-2 text-3xl font-semibold cursor-pointer'>
				Mashxur <ChevronRightIcon className='w-8' />
			</Link>

			<div className="mt-3 grid grid-cols-5">
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
			</div>
		</div>
	)
}
