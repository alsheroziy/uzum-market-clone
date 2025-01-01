import {AddBanner} from './components/ad-banner/banner'
import Banner from './components/banner/banner'
import Header from './components/header/header'
import NavCategories from './components/nav-categories/nav-categories'
import Products from './components/products/products'

export default function App() {
	return (
		<div className='container'>
			<Header />
			<NavCategories />
			<AddBanner />
			<Products />
			<Banner src='https://images.uzum.uz/ct8qhktpb7f7ago79st0/main_page_banner.jpg' link='/' />
			<Products />
			<Banner src='https://images.uzum.uz/ct8qhktpb7f7ago79st0/main_page_banner.jpg' link='/' />
			<Products />
			<Banner src='https://images.uzum.uz/ct8qhktpb7f7ago79st0/main_page_banner.jpg' link='/' />
			<Products />
		</div>
	)
}
