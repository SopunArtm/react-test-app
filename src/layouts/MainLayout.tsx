import { FC, ReactNode } from 'react';

import Sidebar from '@/components/UI/navigation/Sidebar';
import Footer from '@/components/UI/navigation/Footer';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => (
  <div className="min-h-screen relative md:ml-64 bg-slate-100 h-full">
    <Sidebar />
    <div className="relative bg-sky-600 pb-32 pt-2" />
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      {children}
      <Footer />
    </div>
  </div>
);

export default MainLayout;
