import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState('hidden');

  const closeCollapse = () => {
    setCollapse('hidden');
  };

  const showCollapse = () => {
    setCollapse('bg-white m-2 py-3 px-6');
  };

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <button
          className="cursor-pointer text-black opacity-50 md:hidden p-2 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={showCollapse}
        >
          <MenuIcon />
        </button>
        <Link
          className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-2 px-0"
          to="/"
        >
          React Test-App
        </Link>
        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapse}`}
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link
                  className="md:block text-left text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold px-0 py-2"
                  to="/"
                >
                  React Test-App
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden p-2 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={closeCollapse}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          </div>

          <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Pages
          </h6>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link className="text-xs uppercase py-3 font-bold block " to="/">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
