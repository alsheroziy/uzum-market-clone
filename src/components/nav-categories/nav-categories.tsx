import { useEffect, useState } from "react";
import { fetcher } from "../../api/axios";
import { NavCategory } from "./nav-category";
import { ICategory } from "../../utils/interfaces/product.interface";

export const NavCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    const { data } = await fetcher("/categories?limit=100");

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
      {categories.map((category) => (
        <NavCategory key={category.id} category={category} />
      ))}
    </div>
  );
};
