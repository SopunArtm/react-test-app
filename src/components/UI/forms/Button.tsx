import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const Button: FC<Props> = ({ title, ...rest }) => (
  <button
    className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
    type="button"
    {...rest}
  >
    {title}
  </button>
);

export default Button;
