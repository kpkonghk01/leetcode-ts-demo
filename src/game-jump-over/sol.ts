export function printSol(state: string) {
  const length = state.length;
  const binaryState = parseInt(state, 2);
  const slotRowMap: Record<number, number> = {};
  for (let k = 1; k <= length; k++) {
    const n = getRow(k);
    slotRowMap[k] = n;
  }

  return dfs({
    state: binaryState,
    length,
    slotRowMap,
  });
}

export function isEnd(state: number): boolean {
  return !!state && (state & (state - 1)) === 0;
}

function dfs({
  state,
  length,
  slotRowMap,
  path = [],
  from = 0,
  to = 0,
}: {
  state: number;
  length: number;
  slotRowMap: Record<number, number>;
  path?: [number, { from: number; to: number }][];
  from?: number;
  to?: number;
}): any {
  path = [...path, [state, { from, to }]];

  if (isEnd(state)) {
    console.log(
      path
        .map((p) => {
          let result = "";
          if (p[1].from !== 0) {
            result += `from: ${p[1].from}, to: ${p[1].to}\n`;
          }
          result += stateToGraph(p[0], length) + "\n";

          return result;
        })
        .join("\n")
    );

    return state;
  }

  for (let k = 1; k <= length; k++) {
    const n = slotRowMap[k]!;
    const possiblePairs: [number, number][] = [
      [k - 1, k + 1],
      [k + 1, k - 1],
      [k - n + 1, k + n],
      [k + n, k - n + 1],
      [k - n, k + n + 1],
      [k + n + 1, k - n],
    ];

    for (let [from, to] of possiblePairs) {
      const newState = jump({ from, to, mid: k, state, length, slotRowMap });
      if (newState !== state) {
        const result = dfs({
          state: newState,
          length,
          slotRowMap,
          path,
          from,
          to,
        });

        if (result) {
          return result;
        }
      }
    }
  }
}

function jump({
  from,
  to,
  mid,
  state,
  length,
  slotRowMap,
}: {
  from: number;
  to: number;
  mid: number;
  state: number;
  length: number;
  slotRowMap: Record<number, number>;
}) {
  if (from < 1 || from > length || to < 1 || to > length) {
    return state;
  }

  const fromRow = slotRowMap[from]!;
  const toRow = slotRowMap[to]!;
  const fromSlotState = (state & (1 << (length - from))) > 0;
  const midSlotState = (state & (1 << (length - mid))) > 0;
  const toSlotState = (state & (1 << (length - to))) > 0;

  if (
    // from slot and mid slot are occupied, to slot is empty
    fromSlotState &&
    midSlotState &&
    !toSlotState &&
    // in the same row
    ((fromRow === toRow && Math.abs(from - to)) ||
      // in different rows
      (Math.abs(fromRow - toRow) === 2 &&
        (from - to === 2 * toRow + 1 ||
          from - to === 2 * toRow + 3 ||
          to - from === 2 * fromRow + 1 ||
          to - from === 2 * fromRow + 3)))
  ) {
    state ^= 1 << (length - to);
    state ^= 1 << (length - mid);
    state &= flipBits(1 << (length - from), length);
  }

  return state;
}

function getRow(slot: number) {
  return Math.ceil(Math.sqrt(1 + 8 * slot) / 2 - 0.5);
}

function stateToGraph(state: number, length: number) {
  const binary = state.toString(2).padStart(length, "0");
  const totalRows = getRow(binary.length);
  let prevRow = 0;
  let graph = "";

  for (let i = 0; i < binary.length; i++) {
    const row = getRow(i + 1);
    if (prevRow !== row) {
      graph += "\n";
      for (let j = 0; j < totalRows - row; j++) {
        graph += " ";
      }
      prevRow = row;
    }

    const slotValue = binary[i] === "1" ? "ｏ" : "　";
    graph += slotValue;
  }

  return graph;
}

function flipBits(v: number, digits: number) {
  return ~v & (Math.pow(2, digits) - 1);
}
