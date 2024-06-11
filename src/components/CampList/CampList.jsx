import { useState, useEffect } from 'react';
import axios from 'axios';
import CampItem from '../CampItem/CampItem';

import css from './CampList.module.css'

export default function CampList() {
  const [adverts, setAdverts] = useState([]);

  axios.defaults.baseURL = 'https://666756e0a2f8516ff7a72f05.mockapi.io';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/adverts');
        console.log(response.data);
        setAdverts(response.data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <ul className={css.list}>
        {adverts.map(
          ({ id, gallery, name, price, rating, location, description, details, reviews }) => (
            <CampItem
              key={id}
              gallery={gallery}
              name={name}
              price={price}
              rating={rating}
              location={location}
              description={description}
              details={details}
              reviews={reviews}
            />
          )
        )}
      </ul>
    </section>
  );
}
