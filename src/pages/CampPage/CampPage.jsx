import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';
import { LineWave } from 'react-loader-spinner';
import { fetchCamps } from '../../redux/operations.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './CampPage.module.css';
import style from '../Base.module.css';

export default function CampPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.camps);

  useEffect(() => {
    dispatch(fetchCamps());
  }, [dispatch]);
  console.log(items);

  return (
    <div className={style.container}>
      <Header />

      {loading && (
        <div className={css.loading}>
          <LineWave height="180" width="180" color="var(--accent-color)" />
        </div>
      )}
      {error && <h2> Error :(</h2>}
      {items.length > 0 && <CampList items={items} />}
    </div>
  );
}
