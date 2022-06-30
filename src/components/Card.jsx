import { useFilterContext } from "../context/FilterContext";

const Card = ({tags,company,logo,isNew,isFeatured,position,postedAt,contract,location}) => {
  const { checkFilter } = useFilterContext();

  return (
    <div className={isFeatured ? "cardFeatured" : "card"}>
      <div className="cardHeader">
        <img src={`/src/${logo}`} alt="" />
        <div className="cardText">
          <ul className="cardTags">
            <li className="cardTitle">{company}</li>
            {isNew && <li>new!</li>}
            {isFeatured && <li>featured</li>}
          </ul>

          <span className="cardPositionTitle">{position}</span>
          <ul className="cardInfo">
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <hr />
      {
        <ul className="cardFilters">
          {tags.map((element, index) => {
            return (
              <li key={index}>
                <button onClick={() => checkFilter(element)} className="filter">
                  {element}
                </button>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Card;
