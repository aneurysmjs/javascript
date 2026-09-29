import type { FunctionComponent } from 'react';
import Navigation from '@/components/common/Navigation';

const Header: FunctionComponent = () => (
  <header className="w-full px-3 border-b">
    <Navigation />
  </header>
);

export default Header;
