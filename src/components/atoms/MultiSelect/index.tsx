import React from "react";
import Select from "react-select";

const MultiSelect = ({
  options,
  value,
  onChange,
  name,
  placeholder,
  isError,
  errorMessage,
}: any) => {
  return (
    <div>
      <Select
        isMulti
        name={name}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {isError && (
        <div className="text-danger mb-0 pt-2" style={{ fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
