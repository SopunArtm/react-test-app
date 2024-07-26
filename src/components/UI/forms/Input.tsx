import { FC, InputHTMLAttributes } from 'react';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

const Input: FC<Props> = ({ label, value, register, error, ...rest }) => (
  <div className="relative w-full mb-6">
    <label
      className="block uppercase text-slate-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      {label}
    </label>
    <input
      type="text"
      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      value={value}
      {...register}
      {...rest}
    />
    {error && (
      <p className="text-red-500 text-xs italic mt-2">{error.message}</p>
    )}
  </div>
);

export default Input;
