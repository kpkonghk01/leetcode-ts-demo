// https://leetcode.com/problems/shortest-palindrome/description/
// https://leetcode.com/submissions/detail/1396911821/

function shortestPalindrome(s: string): string {
  if (s.length < 2) return s;

  const reversed = s + "#" + s.split("").reverse().join("");
  const table = buildKMPTable(reversed);

  // let i = 0;
  // let j = 0;

  // for (; j < s.length && i < reversed.length; j++) {
  //   if (reversed[i] !== s[j]) {
  //     j = table[j - 1]! ?? -1;
  //   }

  //   i++;
  // }

  return (
    s
      .slice(table[table.length - 1], s.length)
      .split("")
      .reverse()
      .join("") + s
  );
}

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

export { shortestPalindrome };
