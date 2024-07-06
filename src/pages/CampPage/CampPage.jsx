import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList';
import Footer from '../../components/Footer/Footer';
import { LineWave } from 'react-loader-spinner';
import { fetchCamps } from '../../redux/operations.js';
import PaginationControlled from '../../components/PaginationControlled/PaginationControlled.jsx';

import css from './CampPage.module.css';
import style from '../Base.module.css';

export default function CampPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.camps);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const pages = Math.ceil(items.length / 4);

  useEffect(() => {
    dispatch(fetchCamps());
  }, [dispatch]);
  console.log(items);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentItems = items.slice(indexFirst, indexLast);

  return (
    <div className={css.container}>
      <div className={style.container}>
        <Header />
        {loading && (
          <div className={css.loading}>
            <LineWave height="180" width="180" color="var(--accent-color)" />
          </div>
        )}
        {error && (
          <div className={css.error}>
            <h2>Oops! something went wrong :(</h2>
            <p>Try again later</p>
          </div>
        )}
        {items.length > 0 && (
          <div>
            <CampList items={currentItems} />
            <PaginationControlled pages={pages} onChange={handleChangePage} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
