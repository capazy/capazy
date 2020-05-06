import React from 'react';
import Select from 'react-select';

const SelectComponent = ({
  options,
  value,
  onBlur,
  onChange,
  label,
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
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="color">{label}</label>
      <Select
        id="color"
        options={options}
        isMulti={isMulti}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};

export default SelectComponent;
