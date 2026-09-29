import { useDeferredValue, useEffect, useState, type FunctionComponent } from 'react';

import SlowList from './SlowList';

const BaseDeferredValue: FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log('query', query);
    console.log('deferredQuery', deferredQuery);

    console.log('----------');
  }, [query, deferredQuery]);

  return (
    <div className="tutorial">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-gray-900 focus:border-sky-400 focus:ring-4 focus:ring-sky-200 focus:outline-hidden mb-6"
        placeholder="Search..."
      />

      <SlowList text={deferredQuery} />
    </div>
  );
};

export default BaseDeferredValue;
