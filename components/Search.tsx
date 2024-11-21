"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlass } from "./icons/MagnifyingGlass";

const Search = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParam = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <MagnifyingGlass />
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParam.get("query")?.toString() || ""}
        className="w-full rounded-md border border-[#737373] px-10 py-3 text-sm placeholder:text-[#737373] focus:outline-none "
      />
    </div>
  );
};

export default Search;
