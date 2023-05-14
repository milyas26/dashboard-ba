import { Field } from "formik";
import React from "react";

interface InputFormProps {
  value: string;
  name: string;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
}

const InputForm = ({
  value,
  name,
  placeholder,
  isError,
  errorMessage,
}: InputFormProps) => {
  return (
    <div className="">
      <Field
        type="text"
        id={name}
        value={value}
        className="form-control"
        placeholder={placeholder}
      />
      {isError && <div className="text-danger mb-0 pt-2" style={{ fontSize: 12 }}>{errorMessage}</div>}
    </div>
  );
};

export default InputForm;
