import { useState, useEffect } from 'react';
import axios from 'axios';
import CampItem from '../CampItem/CampItem';

export default function CampList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://666756e0a2f8516ff7a72f05.mockapi.io/adverts');
        console.log(response);
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
      <ul>
        <li>
          <CampItem />
        </li>
      </ul>
    </section>
  );
}
