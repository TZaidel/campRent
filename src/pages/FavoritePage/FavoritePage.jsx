import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCamps } from '../../redux/operations.js';

import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';

import style from '../Base.module.css';

export default function FavoritePage() {
  const dispatch = useDispatch();

  const { favoriteItems, loading, error } = useSelector(state => state.camps);
console.log(favoriteItems)
  
  return (
    <div className={style.container}>
      <Header />
      {loading && <h2>Loading...</h2>}
      {error && <h2> Error :(</h2>}
      {favoriteItems.length > 0 ? <CampList items={favoriteItems} /> : <h2>No favorite camps</h2>}
    </div>
  );
}
