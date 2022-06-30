import { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const [dataFiltered, setDataFiltered] = useState(null);

  const checkFilter = (newFilter) => { //Veo si el filtro ya esta en el array de filters, si está, lo borro, sino lo agrego
    let filtersArray = filters;

    if (filtersArray != null) {
      if (filtersArray.includes(newFilter)) {
        filtersArray = filtersArray.filter((element) => element != newFilter);
        if (filtersArray == "") filtersArray = null;
      } else filtersArray = filtersArray.concat(newFilter);
    } else filtersArray = [newFilter];

    setFilters(filtersArray);
  };

  const clearFilters = () => setFilters(null); //Limpio arr Filters

  const filterData = () => { //Filtro de data
    let newData;

    if (filters == null) newData = data; //Si no hay filtros, va toda la data
    else {
      newData = dataFiltered.filter((element) => {
        let includeFilter = false;
        
        filters.forEach((item) => {
          includeFilter = false; //Si includeFilter cambia a True es porq hay q filtrar

          if (
            element.role.includes(item) || //Busco relacion con el filtro
            element.level.includes(item) ||
            element.languages.includes(item) ||
            element.tools.includes(item)
          )
            includeFilter = true;
        });

        if (includeFilter) return true;
      });
    }

    setDataFiltered(newData);
  };

  const FilterContent = {
    filters,
    dataFiltered,
    filterData,
    checkFilter,
    clearFilters,
  };

  useEffect(()=>{
    filterData()
  },[filters])

  return (
    <FilterContext.Provider value={FilterContent}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const { filters, dataFiltered, filterData, checkFilter, clearFilters } = useContext(FilterContext);
  return { filters, dataFiltered, filterData, checkFilter, clearFilters };
};
