// `response(..)` receives array of results from the Ajax call
export function chunking(data: number[]) {
  // let's just do 1000 at a time
  let chunk = data.splice(0, 1000);

  let res: number[] = [];

  // // add onto existing `res` array
  // res = res.concat(
  //   // make a new transformed array with all `chunk` values doubled
  //   chunk.map((val) => {
  //     return val * 2;
  //   }),
  // );

  // add onto existing `res` array
  res = [
    ...res, // make a new transformed array with all `chunk` values doubled
    ...chunk.map((val) => val * 2),
  ];

  const helper = (_data: number[]) => {
    // anything left to process?
    if (data.length > 0) {
      // async schedule next batch
      setTimeout(() => {
        helper(_data);
      }, 0);
    }
  };

  // // anything left to process?
  // if (data.length > 0) {
  //   // async schedule next batch
  //   setTimeout(() => {
  //     chunking(data);
  //   }, 0);
  // }

  return res;
}

export function noChunking(data: number[]) {
  return data.map((val) => val * 2);
}
