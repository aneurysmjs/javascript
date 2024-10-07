import type { FunctionComponent } from 'react';

import StarWarsForm from '../components/StarWarsForm';

import './HomePage.scss';

const HomePage: FunctionComponent = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        home
      </h2>

      <div className="w-25 mx-auto">
        <StarWarsForm />
      </div>
    </section>
  );
};

export default HomePage;
