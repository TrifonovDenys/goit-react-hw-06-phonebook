import React from "react";
import { nanoid } from 'nanoid'
import css from './Filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  console.log(filter);
  return (
    <div className={css.filter}>
      <label className={css.lable} htmlFor={filterInputId}>find contacts by name</label>
      <input
        type="text"
        id={filterInputId}
      />
    </div>
  );
};

export default Filter;

