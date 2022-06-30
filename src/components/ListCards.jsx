import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import Card from './Card'

const ListCards = () => {

  const { dataFiltered, filters } = useFilterContext()

  return (
    <ul className={filters ? "cardContainerWithFilters" : "cardContainer"}>
    {dataFiltered &&
      dataFiltered.map((element, index)=>{

        return(
          <li key={index}>
            <Card
              company={element.company}
              position = {element.position}
              logo={element.logo}
              isNew={element.new}
              isFeatured = {element.featured}
              postedAt = {element.postedAt}
              contract = {element.contract}
              location = {element.location}
              tags = {[element.role,element.level,element.languages,element.tools].flat()}          
            />
          </li>
        )

      })
    
    }
    </ul>
  )
}

export default ListCards