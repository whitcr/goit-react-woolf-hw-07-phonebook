import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from '../../redux/filterSlice';
import { selectFilters } from '../../redux/selector';

const Filter = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filters} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
