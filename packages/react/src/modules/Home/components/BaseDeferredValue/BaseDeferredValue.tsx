import { useDeferredValue, useEffect, useState, type FunctionComponent } from 'react';

import SlowList from './SlowList';

const BaseDeferredValue: FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log('query', query);
    console.log('deferredQuery', deferredQuery);

    console.log('----------');
  }, []);

  return (
    <div className="tutorial">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />

      <SlowList text={deferredQuery} />
    </div>
  );
};

export default BaseDeferredValue;
