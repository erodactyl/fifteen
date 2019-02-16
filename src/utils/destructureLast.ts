const destructureLast = <T>(arr: T[]): [T[], T] => {
  const last = arr[arr.length - 1];
  const head = arr.slice(0, arr.length - 1);
  return [head, last];
};

export default destructureLast;
