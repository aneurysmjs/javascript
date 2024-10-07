import type { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const Layout: FunctionComponent = () => (
  <main className="d-flex flex-column vh-100">
    <Navbar />
    <div className="flex-grow-1">{<Outlet />}</div>
    <Footer />
  </main>
);

export default Layout;
