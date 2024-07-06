import sprite from '/svg/sprite.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteItem } from '../../redux/campsSlice.js';
import ModalCamp from '../ModalCamp/ModalCamp';

import css from './CampItem.module.css';

export default function CampItem(camp) {
  const { _id, gallery, name, price, rating, location, description, details, reviews, adults } =
    camp;

  const [modalShow, setModalShow] = useState(false);
  const validKeys = new Set([
    'water',
    'bathroom',
    'beds',
    'shower',
    'toilet',
    'kitchen',
    'airConditioner',
    'freezer',
    'microwave',
    'radio',
    'hob',
    'gas',
    'TV',
    'CD',
  ]);

  const detailIcons = {
    water: 'water',
    adults: 'adults',
    CD: 'CD',
    TV: 'tv',
    airConditioner: 'airConditioner',
    beds: 'beds',
    freezer: 'freezer',
    gas: 'gas',
    kitchen: 'kitchen',
    shower: 'shower',
    bathroom: 'shower',
    radio: 'radio',
    toilet: 'wc',
    microwave: 'microwave',
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
          <p className={css.price}>
            €{price}.00<span> / day</span>
          </p>

          <button className={css.likeBtn} onClick={handleToggleFavorite}>
            <svg width="24" height="24" className={css.iconLike}>
              <use xlinkHref={`${sprite}#icon-${isFavorite ? 'like-red' : 'like'}`}></use>
            </svg>
          </button>
        </div>

        <div className={css.infoWrap}>
          <div className={css.ratingWrap}>
            <svg width="16" height="16" className={css.filledStar}>
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
          <li className={css.detailsItem}>
            <svg width="20" height="20" className={css.iconDetails}>
              <use xlinkHref={`${sprite}#icon-adults`}></use>
            </svg>
            <p className={css.detailsItemName}>adults: {adults}</p>
          </li>
          {Object.entries(details)
            .filter(([key, value]) => validKeys.has(key) && value)
            .map(([key, value]) => (
              <li key={key} className={css.detailsItem}>
                <svg width="20" height="20" className={css.iconDetails}>
                  <use xlinkHref={`${sprite}#icon-${detailIcons[key] || 'icon-like'}`}></use>
                </svg>
                <p className={css.detailsItemName}>{value}</p>
                <p>{key}</p>
              </li>
            ))}
        </ul>
        <button
          className={css.moreBtn}
          onClick={() => {
            console.log(_id);
            setModalShow(true);
          }}
        >
          Show more
        </button>
      </div>

      {modalShow && <ModalCamp camp={camp} show={modalShow} onHide={() => setModalShow(false)} />}
    </li>
  );
}
