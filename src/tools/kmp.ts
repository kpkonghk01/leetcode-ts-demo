function buildKMPTable(s: string): number[] {
  const table = new Array(s.length).fill(0);

  let i = 1;
  let j = 0;

  while (i < s.length) {
    if (s[i] === s[j]) {
      j++;
      table[i] = j;
      i++;
    } else {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }

  return table;
}

export { buildKMPTable };
