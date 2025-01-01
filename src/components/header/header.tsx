import { Link } from 'react-router-dom'
import SearchInput from '../search-input'
import HeaderLinks from './header-links'

export default function Header() {
	return (
		<header className='flex items-center justify-between container py-3'>
			<Link to='/'>
				<img src='icons/logo.svg' alt='logo' className='w-[215px] h-[32px]' />
			</Link>
			<SearchInput />
			<HeaderLinks />
		</header>
	)
}
