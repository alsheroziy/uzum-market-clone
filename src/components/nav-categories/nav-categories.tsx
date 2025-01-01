import NavCategory from "./nav-category";

export default function NavCategories() {
  return (
	<div className="flex gap-2 overflow-x-scroll scrollbar-hide">
		<NavCategory />
		<NavCategory />
		<NavCategory />
		<NavCategory />
		<NavCategory />
		<NavCategory />
		<NavCategory />
	</div>
  )
}
