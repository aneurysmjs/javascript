import type { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const Layout: FunctionComponent = () => (
  <main className="flex flex-col h-screen">
    <Navbar />
    <div className="grow">{<Outlet />}</div>
    <Footer />
  </main>
);

export default Layout;
