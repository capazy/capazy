import React from 'react';
import Select from 'react-select-virtualized';

const SelectOneComponent = ({ options, value, onBlur, onChange, field }) => {
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
        placeholder="Search projects for skill..."
      />
    </div>
  );
};

export default SelectOneComponent;
