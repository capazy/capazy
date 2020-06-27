import React from 'react';
import Select from 'react-select';

const SelectMultiComponent = ({
  options,
  value,
  onBlur,
  onChange,
  field,
  isMulti,
}) => {
  const handleChange = (value) => {
    onChange(field, value);
  };

  const handleBlur = () => {
    onBlur(field, true);
  };

  return (
    <Select
      options={options}
      isMulti={isMulti}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
  );
};

export default SelectMultiComponent;
