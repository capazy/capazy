import React from 'react';
import Select from 'react-select-virtualized';

const SelectOneComponent = ({
  options,
  value,
  onBlur,
  onChange,
  field,
  placeholder,
}) => {
  const handleChange = (value) => {
    onChange(field, value);
  };

  const handleBlur = () => {
    onBlur(field, true);
  };

  return (
    <div className="my-2">
      <Select
        options={options}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectOneComponent;
