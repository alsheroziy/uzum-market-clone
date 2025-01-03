import { SearchInput } from "../search-input";
import { HeaderLinks } from "./header-links";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-3">
      <Link to="/">
        <img src="/icons/logo.svg" alt="logo" className="w-[215px] h-[32px]" />
      </Link>
      <SearchInput />
      <HeaderLinks />
    </header>
  );
};
