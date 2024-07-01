import sprite from '/svg/sprite.svg';
import css from './CampItem.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteItem } from '../../redux/campsSlice.js';

export default function CampItem({
  _id,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  details,
  reviews,
}) {

  const detailIcons = {
    water: 'water',
    adults: 'adults',
    CD: 'cd',
    TV: 'tv',
    airConditioner: 'conditioner',
    bathroom: 'bathroom',
    beds: 'bed',
    freezer: 'freezer',
    gas: 'gas',
    kitchen: 'kitchen',
  shower: 'shower'    
  };
    
  const dispatch = useDispatch();
  const reviewsCount = Array.isArray(reviews) ? reviews.length : 0;

  const favoriteItems = useSelector(state => state.camps.favoriteItems);

  const isFavorite = favoriteItems.some(item => item._id === _id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteItem(_id));
  };

  return (
    <li className={css.item}>
      <div className={css.imageWrap}>
        {Array.isArray(gallery) && gallery.length > 0 ? (
          <img src={gallery[0]} className={css.image} />
        ) : (
          <p>No image</p>
        )}
      </div>
      <div className={css.mainInfoWrap}>
        <div className={css.nameWrap}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.name}>€{price}.00</p>

          <button className={css.likeBtn} onClick={handleToggleFavorite}>
            <svg width="24" height="24" className={css.iconLike}>
              <use xlinkHref={`${sprite}#icon-${isFavorite ? 'like-red' : 'like'}`}></use>
            </svg>
          </button>
        </div>

        <div className={css.infoWrap}>
          <div className={css.ratingWrap}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={css.rating}>{rating}</p>
            {reviewsCount > 0 ? <p>({reviewsCount} reviews)</p> : <p>no reviews</p>}
          </div>

          <div className={css.locationWrap}>
            <svg width="16" height="16" className={css.iconMap}>
              <use xlinkHref={`${sprite}#icon-map`}></use>
            </svg>
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <div className={css.descriptionWrap}>
          <p className={css.description}>{description}</p>
        </div>
        <ul className={css.detailsList}>
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className={css.detailsItem}>
              <svg width="16" height="16" className={css.iconDetails}>
                <use xlinkHref={`${sprite}#icon-${detailIcons[key] || 'icon-like'}`}></use>
              </svg>
              <p className={css.detailsItemName}>{value}</p>
              <p>{key}</p>
            </li>
          ))}
        </ul>
        <button className={css.moreBtn}>Show more</button>
      </div>
    </li>
  );
}
