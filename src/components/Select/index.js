import React from 'react';
import Select from 'react-select';

const MySelect = ({ options, value, onBlur, onChange, label, isMulti }) => {
  const handleChange = (value) => {
    onChange('topics', value);
  };

  const handleBlur = () => {
    onBlur('topics', true);
  };
  console.log('value', value, 'option', options);

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

export default MySelect;
