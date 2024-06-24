import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCamps } from '../../redux/operations.js';

import CampItem from '../CampItem/CampItem';

import css from './CampList.module.css';

export default function CampList({ items }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamps());
  }, [dispatch]);

  return (
    <section>
      <ul className={css.list}>
        {items.map(item => (
          <CampItem key={item._id} {...item} />
        ))}
      </ul>
    </section>
  );
}
