import Styles from "./SearchBar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (evt) => {
    setQuery(evt.target.value);
  }

  return (
    <form className={Styles["search-bar"]}>
      <button type="submit" className={Styles["search-bar__btn"]}>
        <CiSearch className={Styles["search-bar__icon"]} />
      </button>
      <input type="text" className={Styles["search-bar__input"]} name="query" value={query} onChange={queryChangeHandler} />
    </form>
  )
}

export default SearchBar;
