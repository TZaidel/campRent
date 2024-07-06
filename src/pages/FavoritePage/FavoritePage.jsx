import { useSelector } from 'react-redux';
import sprite from '../../../public/svg/sprite.svg';
import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';

import style from '../Base.module.css';
import css from './FavoritePage.module.css';

export default function FavoritePage() {
  const { favoriteItems } = useSelector(state => state.camps);

  return (
    <div className={style.container}>
      <Header />
      <div className={css.wrap}>
        {favoriteItems.length > 0 ? (
          <CampList items={favoriteItems} />
        ) : (
          <div className={css.descriptionWrap}>
            <svg width="100" height="100" className={css.iconLike}>
              <use xlinkHref={`${sprite}#icon-like`}></use>
            </svg>
            <h2 className={css.title}>No favorites yet</h2>

            <p className={css.description}>
              Tap the heart on any pattern to make it favorite. All your favorites camps will appear
              here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
