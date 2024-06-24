import sprite from '/svg/sprite.svg';
import css from './FavCampItem.module.css';

import { useDispatch } from 'react-redux';
import { toggleFavoriteItem } from '../../redux/campsSlice.js';

export default function FavCampItem({
  id,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  details,
  reviews,
}) {
  const camp = {
    id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    details,
    reviews,
  };

  const dispatch = useDispatch();
  const reviewsCount = Array.isArray(reviews) ? reviews.length : 0;

  const toggleFavorite = camp => e => {
    dispatch(toggleFavoriteItem(camp));
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

          <button className={css.likeBtn} onClick={()=>toggleFavorite()}>
            <svg width="24" height="24">
              <use xlinkHref={`${sprite}#icon-like`}></use>
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
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-map`}></use>
            </svg>
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <div className={css.descriptionWrap}>
          <p className={css.description}>{description}</p>
        </div>
        <ul className={css.detailsList}>
          {/* {details.map(({ bathroom }) => (
            <p>{bathroom}</p>
))} */}
          <li className={css.detailsItem}>
            <p className={css.detailsItemName}>bathroom</p>
          </li>
        </ul>
        <button className={css.moreBtn}>Show more</button>
      </div>
    </li>
  );
}