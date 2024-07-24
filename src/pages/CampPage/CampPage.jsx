import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';
import Filter from '../../components/Filter/Filter';
import CampList from '../../components/CampList/CampList';
import Footer from '../../components/Footer/Footer';
import { InfinitySpin } from 'react-loader-spinner';
import { fetchCamps } from '../../redux/operations.js';
import PaginationControlled from '../../components/PaginationControlled/PaginationControlled.jsx';

import css from './CampPage.module.css';
import style from '../Base.module.css';

export default function CampPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.camps);
  const [currentPage, setCurrentPage] = useState(1);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(fetchCamps());
  }, [dispatch]);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const filteredItems = items.filter(item => {
    const locationSelected =
      locations.length === 0 || locations.some(location => item.location.includes(location));
    const filterSelected =
      filters.length === 0 || filters.every(filter => item.details[filter] >= 1);
    return locationSelected && filterSelected;
  });

  const pages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentItems = filteredItems.slice(indexFirst, indexLast);

  return (
    <div className={css.container}>
      <div className={style.container}>
        <Header />
        {loading && (
          <div className={css.loading}>
            <InfinitySpin height="180" width="180" color="var(--accent-color)" />
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
            <div className={css.wrap}>
              <div>
                <Location locations={locations} setLocations={setLocations} />
                <Filter filters={filters} setFilters={setFilters} />
              </div>
              <CampList items={currentItems} />
            </div>
            <PaginationControlled pages={pages} onChange={handleChangePage} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
