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
      <label>{label}</label>
      <Select
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
