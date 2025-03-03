import React, { FC } from 'react';

const Footer: FC = () => (
  <footer className="block py-4">
    <div className="container mx-auto px-4">
      <hr className="mb-4 border-b-1 border-slate-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full px-4">
          <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
            Copyright © 2024 React Test-App
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
