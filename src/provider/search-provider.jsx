import { createContext, useState } from "react";

export const SearchContext = createContext(null);
const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
