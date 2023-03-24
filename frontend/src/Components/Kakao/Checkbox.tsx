import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterMapAction } from '../../store/RegisterMapSlice'

const Checkbox = ({ id, label }: any) => {
  const dispatch = useDispatch();
  // const checked = useSelector(state => state.registerMap.checkedList.includes(id));
  const checked = useSelector((state: any) => state.registerMap.checkedList.includes(id));

  
  const handleChange = () => {
    dispatch(RegisterMapAction.toggleChecked(id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </div>
  );
};

export default Checkbox;