const swap = (arr: any[], idx1: number, idx2: number) => {
  const val1 = arr[idx1];
  const val2 = arr[idx2];
  return arr.map((val, idx) => idx === idx1 ? val2 : idx === idx2 ? val1 : val);
};

export default swap;
