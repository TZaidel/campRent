import Header from '../../components/Header/Header';

import { useSelector } from 'react-redux';

import FavCampList from '../../components/FavCampList/FavCampList';

export default function FavoritePage() {
  const { favoriteItems, loading, error } = useSelector(state => state.camps);

  return (
    <>
      <Header />
      <h1>FavoritePage</h1>

      {loading && <h2>Loading...</h2>}
      {error && <h2> Error :(</h2>}
      {favoriteItems.length > 0 && <FavCampList />}
    </>
  );
}
