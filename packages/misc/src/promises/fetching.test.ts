import mockAxios from 'axios';
import fetching from './fetching';

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const dataMock = {
  time: {
    updated: 'Feb 5, 2023 14:43:00 UTC',
    updatedISO: '2023-02-05T14:43:00+00:00',
    updateduk: 'Feb 5, 2023 at 14:43 GMT',
  },
  disclaimer:
    'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',
  chartName: 'Bitcoin',
  bpi: {
    USD: {
      code: 'USD',
      symbol: '&#36;',
      rate: '23,200.2410',
      description: 'United States Dollar',
      rate_float: 23200.241,
    },
    GBP: {
      code: 'GBP',
      symbol: '&pound;',
      rate: '19,385.9358',
      description: 'British Pound Sterling',
      rate_float: 19385.9358,
    },
    EUR: {
      code: 'EUR',
      symbol: '&euro;',
      rate: '22,600.4220',
      description: 'Euro',
      rate_float: 22600.422,
    },
  },
};

// jest.mock('axios', () => ({
//   get: jest.fn().mockImplementation(() => Promise.resolve(dataMock)),
// }));

jest.mock('axios');

describe('fetching', () => {
  afterEach(jest.clearAllMocks);

  it('resolves data', async () => {
    (mockAxios.get as jest.Mock).mockImplementation(() => Promise.resolve(dataMock));

    await expect(fetching(url)).resolves.toStrictEqual(dataMock);
    expect(mockAxios.get).toHaveBeenCalledWith(url);
  });

  it('rejects data', async () => {
    (mockAxios.get as jest.Mock).mockImplementation(() => Promise.reject('Not Found'));

    await expect(fetching(url)).rejects.toStrictEqual('Not Found');
  });
});
