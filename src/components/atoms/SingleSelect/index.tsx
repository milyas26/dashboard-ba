import React from "react";
import Select from "react-select";

const SingleSelect = ({
  options,
  value,
  onChange,
  isSearchable,
  isRtl,
  isClearable,
  isLoading,
  isDisabled,
  name,
  placeholder,
  isError,
  errorMessage,
}: any) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {isError && (
        <div className="text-danger mb-0 pt-2" style={{ fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default SingleSelect;
