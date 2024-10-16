import axios, { type AxiosResponse } from 'axios';
import { type FC, useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/comments';

import useFetchConfigData from '../hooks/useFetchConfigData';

interface Data {
  id: number;
  body: string;
}

// const useFetchConfigData = () => {
//   const [data, setData] = useState<Data[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     axios
//       .get<Data[]>(url, { signal: controller.signal })
//       .then((response) => {
//         setIsLoading(false);
//         setData(response.data);
//         setError(null);
//       })
//       .catch((err) => {
//         console.log('err.name', err.name);
//         if (err.name === 'CanceledError') {
//           console.log('err: CanceledError', err);
//         }
//         setError(err);
//       });

//     return () => {
//       console.log('cleaning!!!!!!');

//       controller.abort();
//     };
//   }, []);

//   return {
//     data,
//     isLoading,
//     error,
//   };
// };

const DashboardConfigTab: FC = () => {
  const { data, isLoading, error } = useFetchConfigData();

  return (
    <div className="text-theme">
      {isLoading && <div className="text-theme">...fetching data</div>}
      {data.length > 0 && (
        <div className="h-72 overflow-y-scroll">
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}

          <ul>
            {data.map((item) => (
              <li className="mb-3" key={item.id}>
                {item.body}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <div className="text-theme">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DashboardConfigTab;
