import { FavoriteList } from '../components/FavoriteList/FavoriteList';
import { useEffect } from 'react';
import { useState } from 'react';
import { Empty } from '../components/EmptyText/EmptyText';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
      setFavorites(storedItems);
    };
    fetchDataFromLocalStorage();
  }, []);

  return (
    <>
      {favorites.length !== 0 ? (
        <FavoriteList favorites={favorites} />
      ) : (
        <Empty></Empty>
      )}
    </>
  );
}
