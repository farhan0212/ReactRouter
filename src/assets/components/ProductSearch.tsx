import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );

  function handleClick() {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <>
      <h1>Search product</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <p>kamu mencari : {searchParams.get("search")}</p>
    </>
  );
}
