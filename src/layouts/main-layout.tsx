import { ReactNode } from "react";
import { Header } from "../components/header/header";
import { NavCategories } from "../components/nav-categories/nav-categories";

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <div className="container">
      <Header />
      <NavCategories />
      <div className="mt-3">{children}</div>
    </div>
  );
};
