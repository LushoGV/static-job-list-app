import photosnapLogo from '../images/photosnap.svg';
import manageLogo from '../images/manage.svg';
import accountLogo from '../images/account.svg';
import myhomeLogo from '../images/myhome.svg';
import loopstudiosLogo from '../images/loop-studios.svg';
import faceitLogo from '../images/faceit.svg';
import shortlyLogo from '../images/shortly.svg';
import insureLogo from '../images/insure.svg';
import eyecamcoLogo from '../images/eyecam-co.svg';
import theairfliterLogo from '../images/the-air-filter-company.svg';
import { useFilterContext } from "../context/FilterContext";

const lib = {
  Photosnap: photosnapLogo,
  Manage: manageLogo,
  Account: accountLogo,
  MyHome: myhomeLogo,
  'Loop Studios': loopstudiosLogo,
  FaceIt: faceitLogo,
  Shortly: shortlyLogo,
  Insure: insureLogo,
  'Eyecam Co.': eyecamcoLogo,
  'The Air Filter Company': theairfliterLogo,
};

const Card = ({tags,company,logo,isNew,isFeatured,position,postedAt,contract,location}) => {
   
  const { checkFilter } = useFilterContext();


  return (
    <div className={isFeatured ? "cardFeatured" : "card"}>
      <div className="cardHeader">
        <img src={lib[company]} alt="" />
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
