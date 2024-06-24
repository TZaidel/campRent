import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';

import { fetchCamps } from '../../redux/operations.js';
import { useEffect } from 'react';
import { toggleFavoriteItem } from '../../redux/campsSlice.js';
import { useSelector, useDispatch } from 'react-redux';

import style from '../Base.module.css';

export default function TestPage() {
  const dispatch = useDispatch();
  const { favoriteItems, loading, error } = useSelector(state => state.camps);

  // useEffect(() => {
  //   dispatch(fetchCamps());
  // }, [dispatch]);

   const handleToggleFavorite = id => {
     dispatch(toggleFavoriteItem(id));
  };
  
  return (
    <div className={style.container}>
      <Header />
      {loading && <h2>Loading...</h2>}
      {error && <h2> Error :(</h2>}
      {favoriteItems.length > 0 ? (
        <CampList items={favoriteItems} toggleFavorite={handleToggleFavorite} />
      ) : (
        <p>No favorite items</p>
      )}
    </div>
  );
}
