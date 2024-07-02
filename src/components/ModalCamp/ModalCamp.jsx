import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import sprite from '/svg/sprite.svg';
import { useState } from 'react';

import css from './ModalCamp.module.css';

export default function ModalCamp({ show, onHide, camp }) {
  const { name, price, description, reviews, location, gallery, rating, adults, details } = camp;
  console.log(camp);

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
  };

  const [features, setFeatures] = useState(false);
  const [comments, setComments] = useState(false);

  const reviewsCount = Array.isArray(reviews) ? reviews.length : 0;

  const renderRatingIcons = (rating) => {
    return (
      <div className={css.ratingIcon}>
        {[...Array(5)].map((_, i) => (
          <svg
            width="16"
            height="16"
            key={i}
            className={i < rating ? css.filledStar : css.emptyStar}
          >
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
        ))}
      </div>
    );
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
      backdropClassName={css.modal_backdrop}
      className={css.modal}
    >
      <div className={css.container}>
        <Modal.Header className={css.header}>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className={css.title}> {name}</h3>
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
            <p className={css.price}>{price}.00€</p>
          </Modal.Title>
          <Button onClick={onHide} className={css.xBtn}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <ul className={css.imageList}>
            {gallery.map(img => (
              <li key={img} className={css.imageItem}>
                <img height="200" src={img} className={css.image} />
              </li>
            ))}
          </ul>
          <p className={css.description}>{description}</p>

          <div className={css.moreBtnWrap}>
            <button
              onClick={() => {
                setFeatures(true);
                setComments(false);
              }}
              className={css.moreBtn}
            >
              Features
            </button>
            <button
              onClick={() => {
                setComments(true);
                setFeatures(false);
              }}
              className={css.moreBtn}
            >
              Reviews
            </button>
          </div>

          {features && (
            <div>
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
              <h3>Vehicle details</h3>
            </div>
          )}

          {comments && (
            <ul className={css.reviewList}>
              {reviews.map(review => (
                <li key={review.reviewer_name} className={css.reviewItem}>
                  <div className={css.reviewTitle}>
                    <h3 className={css.reviewName}>{review.reviewer_name}</h3>

                    <div className={css.reviewRating}>
                      {renderRatingIcons(review.reviewer_rating)}
                    </div>
                  </div>
                  <p className={css.reviewComment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          )}

          <div></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} className={css.closeBtn}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
