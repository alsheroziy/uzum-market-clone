import { AdBanner } from "../components/ad-banner/ad-banner";
import { CategoryProducts } from "../components/category-products/category-products";
import { Banner } from "../components/banner/banner";
import { useEffect, useState } from "react";
import { fetcher } from "../api/axios";

export const Homepage = () => {
  const [pupularProducts, setPopularProducts] = useState([]);

  const fetchPopularProducts = async () => {
    const { data } = await fetcher("/products?limit=10&offset=10");

    setPopularProducts(data);
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);
  return (
    <div>
      <AdBanner />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <Banner
        src="https://images.uzum.uz/ct8qhktpb7f7ago79st0/main_page_banner.jpg"
        link="/"
      />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
    </div>
  );
};
