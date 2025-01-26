import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchFlats } from '../../redux/operations';

export const FlatsFilter = () => {
  const dispatch = useDispatch();
 

  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [rooms, setRooms] = useState('');

  // Під час першого рендерингу отримуємо всі квартири
  useEffect(() => {
    dispatch(fetchFlats({}));
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(fetchFlats({ priceMin, priceMax, rooms }));
  };

  const handleResetFilters = () => {
    setPriceMin('');
    setPriceMax('');
    setRooms('');
    dispatch(fetchFlats({})); // Отримуємо всі квартири
  };

  return (
    <div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={priceMin}
            onChange={e => setPriceMin(e.target.value)}
            placeholder="Enter min price"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value)}
            placeholder="Enter max price"
          />
        </label>
        <label>
          Rooms:
          <select
            value={rooms}
            onChange={e => setRooms(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
          </select>
        </label>
        <button onClick={handleFilter}>Search</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};
