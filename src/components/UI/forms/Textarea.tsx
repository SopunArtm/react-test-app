import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
}

const RadioButton: FC<Props> = ({ label, value, ...rest }) => (
  <div className="relative w-full">
    <label
      className="block uppercase text-slate-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      {label}
    </label>
    <textarea
      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      rows={4}
      value={value}
      {...rest}
    />
  </div>
);

export default RadioButton;
