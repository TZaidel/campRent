import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.jsx';
import CampPage from './pages/CampPage/CampPage.jsx';
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;


//   reducers: {
//     toggleFavoriteItem: (state, action) => {
//       const id = action.payload;
//       const index = state.items.findIndex(item => item.id === id);

//       console.log(state.items[0].name);
//       if (index === -1) {
//         const item = state.items[index];
// console.log(item)
//           state.favoriteItems.push(item);
//         } else {
//           state.favoriteItems = state.favoriteItems.filter(item => item._id !== id);
//         }
      
//     },
//   },