const randomize = <T>(arr: T[]): T[] => {
  return arr
    .map((val) => ({ val, rand: Math.random() }))
    .sort((a, b) => {
      if (a.rand > b.rand) {
        return 1;
      }
      return -1;
    })
    .map(({ val }) => val);
};

export default randomize;
