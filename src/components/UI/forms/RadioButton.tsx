import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const RadioButton: FC<Props> = ({ label, value, ...rest }) => (
  <div className="flex items-center px-4">
    <input
      type="radio"
      value={value}
      className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      {...rest}
    />
    <label
      className="block uppercase text-slate-600 text-xs font-bold ml-2"
      htmlFor="grid-password"
    >
      {label}
    </label>
  </div>
);

export default RadioButton;
