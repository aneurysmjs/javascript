import type { FunctionComponent } from 'react';

import StarwarsForm from '../components/StarwarsForm';

import './HomePage.scss';

const HomePage: FunctionComponent = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        home
      </h2>

      <div className="w-25 mx-auto">
        <StarwarsForm />
      </div>
    </section>
  );
};

export default HomePage;
