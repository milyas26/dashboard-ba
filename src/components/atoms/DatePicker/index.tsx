import React from "react";
import { DatePicker as DP } from "rsuite";

const DatePicker = ({
  placeholder,
  className,
  value,
  onChange,
  isError,
  errorMessage,
}: any) => {
  return (
    <div>
      <DP
        size="md"
        placeholder={placeholder}
        className={`w-full ${className}`}
        value={value}
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

export default DatePicker;
