import { HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeaderLink from './header-link'

export default function HeaderLinks() {
	return (
		<div className='flex gap-2'>
			<HeaderLink icon={<ShoppingBagIcon className='w-6 h-6'/>} link='/orders' title='Buyurtmalar'/>
			<HeaderLink icon={<HeartIcon className='w-6 h-6'/>} link='/favourites' title='Saralanganlar'/>
			<HeaderLink icon={<ShoppingCartIcon className='w-6 h-6'/>} link='/cart' title='Savatcha'/>
		</div>
	)
}
