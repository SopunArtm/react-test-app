import { FC } from 'react';

import MainLayout from '@/layouts/MainLayout';

import CardSettings from '@/components/settings/CardSettings';

const SettingsPage: FC = () => (
  <MainLayout>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-slate-700 text-xl font-bold">Settings</h6>
        </div>
      </div>
      <CardSettings />
    </div>
  </MainLayout>
);

export default SettingsPage;
