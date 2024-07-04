import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCamps } from '../../redux/operations.js';

import CampItem from '../CampItem/CampItem';

import css from './CampList.module.css';

export default function CampList({ items }) {

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {items.map(item => (
          <CampItem key={item._id} {...item} />
        ))}
      </ul>
    </section>
  );
}
