import React from "react";
import { DateRangePicker as DRP } from "rsuite";

const DateRangePicker = ({
  value,
  placeholder,
  className,
  onChange,
  isError,
  errorMessage,
}: any) => {
  return (
    <div>
      <DRP
        value={value}
        placeholder={placeholder}
        className={`w-full ${className}`}
        onChange={onChange}
      />
      {isError && (
        <div className="text-danger mb-0 pt-2" style={{ fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
