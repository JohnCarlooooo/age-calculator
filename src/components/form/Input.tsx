import React from "react";
import { UseFormRegister, Path, FieldErrors } from "react-hook-form";

interface FormInput {
  day: number;
  month: number;
  year: number;
}

interface InputProps {
  name: Path<FormInput>;
  label: string;
  error?: string;
  placeholder: string;
  rules?: any;
  register: UseFormRegister<FormInput>;
}

const Input = ({
  name,
  label,
  error,
  register,
  placeholder,
  rules,
}: InputProps) => {
  return (
    <div className="form-container">
      <span className={`form-label ${error ? "text-LightRed" : ""}`}>
        {label}
      </span>
      <input
        placeholder={placeholder}
        type="number"
        className={`form-input ${error ? "border-LightRed" : ""}`}
        {...register(name, rules)}
      />
      {error && (
        <p role="alert" className="italic text-LightRed">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
