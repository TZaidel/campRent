import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';

import { fetchCamps } from '../../redux/operations.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from '../Base.module.css';

export default function CampPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.camps);

  useEffect(() => {
    dispatch(fetchCamps());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Header />
      {loading && <h2>Loading...</h2>}
      {error && <h2> Error :(</h2>}
      {items.length > 0 && <CampList items={items} />}
    </div>
  );
}
