import {Banner} from './components/banner/banner'
import Header from './components/header/header'
import NavCategories from './components/nav-categories/nav-categories'
import Products from './components/products/products'

export default function App() {
	return (
		<div className='container'>
			<Header />
			<NavCategories />
			<Banner />
			<Products />
			<Products />
		</div>
	)
}
