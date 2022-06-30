import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const NavFilters = () => {
  const { filters, checkFilter, clearFilters } = useFilterContext();
  const [tags, setTags] = useState(null);

  useEffect(() => {
    setTags(filters);
  }, [filters]);

  return (
    <nav className="navFilters">
      <ul>
        {tags != null &&
          tags.map((element, index) => {
            return (
              <li key={index} className="filter">
                {element}
                <button onClick={() => checkFilter(element)}> x </button>
              </li>
            );
          })}
      </ul>
      <button onClick={() => clearFilters()} className="clear">clear</button>
    </nav>
  );
};

export default NavFilters;
