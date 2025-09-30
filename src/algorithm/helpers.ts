enum ItemType {
  Rock = 'r',
  Paper = 'p',
  Scissors = 's',
}

type BoardCell = ItemType | ' ';

const predatorLookup = {
  [ItemType.Rock]: ItemType.Paper,
  [ItemType.Paper]: ItemType.Scissors,
  [ItemType.Scissors]: ItemType.Rock,
};

const preyLookup = {
  [ItemType.Rock]: ItemType.Scissors,
  [ItemType.Paper]: ItemType.Rock,
  [ItemType.Scissors]: ItemType.Paper,
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;
const CHROMOSOME_LENGTH = BOARD_WIDTH * BOARD_HEIGHT;

const randomGene = (genome: string[]) => {
  if (!genome.length) {
    throw Error('Missing genome; cannot access random gene')
  }
  return genome[Math.floor(Math.random() * genome.length)]
}

const randomChromosome = (genome: string[], chromosomeLength: number) => {
  const chromosome: string[] = [];
  for (let i = 0; i < chromosomeLength; i++) {
    chromosome.push(randomGene(genome))
  }
  return chromosome;
}

const decodeChromosomeToBoard = (chromosome: BoardCell[]) => {
  const board: BoardCell[][] = [];

  for (let i = 0; i < BOARD_HEIGHT; i++) {
    //for each outer iteration, add a new row
    const row: BoardCell[] = [];
    for (let j = 0; j < BOARD_WIDTH; j++) {
      //for each row, push the associated gene in the chromosome
      row.push(chromosome[i*BOARD_WIDTH+j])
    }
    board.push(row);
  }

  return board;
}

const getDistanceBetweenCells = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.max(Math.abs(x1-x2), Math.abs(y1-y2));
}

const locateNearest = (type: 'predator' | 'prey', x: number, y: number, board: BoardCell[][]) => {
  const cellItem = board[y][x];
  if (cellItem === ' ') return null;

  const targetType = type === 'predator' ? predatorLookup[cellItem] : preyLookup[cellItem];
  
  let closestDistance = Infinity;
  let closestTarget = null;
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const foundCell = row[j];
      if (foundCell === targetType) {
        const distance = getDistanceBetweenCells(x, y, j, i);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestTarget = foundCell;
        }
      }
    }
  }
  return closestTarget;
}

const locateNearestPredator = (x: number, y: number, board: BoardCell[][]) => {
  return locateNearest('predator', x, y, board);
}

const locateNearestPrey = (x: number, y: number, board: BoardCell[][]) => {
  return locateNearest('prey', x, y, board);
}

const listAdjacent = (cellValue: BoardCell, x: number, y: number, board: BoardCell[][]) => {
  const north = board[y-1]?.[x];
  const northEast = board[y-1]?.[x+1]
  const east = board[y][x+1];
  const southEast = board[y+1]?.[x+1];
  const south = board[y+1]?.[x];
  const southWest = board[y+1]?.[x-1]
  const west = board[y][x-1];
  const northWest = board[y-1]?.[x-1];

  const adjacentCells: [number, number][] = [];

  if (north !== undefined && north === cellValue) {
    adjacentCells.push([x, y-1]);
  }
  if (northEast !== undefined && northEast === cellValue) {
    adjacentCells.push([x+1, y-1]);
  }
  if (east !== undefined && east === cellValue) {
    adjacentCells.push([x+1, y]);
  }
  if (southEast !== undefined && southEast === cellValue) {
    adjacentCells.push([x+1, y+1]);
  }
  if (south !== undefined && south === cellValue) {
    adjacentCells.push([x, y+1]);
  }
  if (southWest !== undefined && southWest === cellValue) {
    adjacentCells.push([x-1, y+1]);
  }
  if (west !== undefined && west === cellValue) {
    adjacentCells.push([x-1, y]);
  }
  if (northWest !== undefined && northWest === cellValue) {
    adjacentCells.push([x-1, y-1]);
  }

  return adjacentCells;
}

const listAdjacentEmptyCells = (x: number, y: number, board: BoardCell[][]) => {
  return listAdjacent(' ', x, y, board);
}

const listAdjacentPrey = (x: number, y: number, board: BoardCell[][]) => {
  const targetCell = board[y][x];
  if (targetCell === ' ') return [];

  const preyType = preyLookup[targetCell];
  return listAdjacent(preyType, x, y, board);
}

const listAdjacentPredators = (x: number, y: number, board: BoardCell[][]) => {
  const targetCell = board[y][x];
  if (targetCell === ' ') return [];

  const predatorType = predatorLookup[targetCell];
  return listAdjacent(predatorType, x, y, board);
}

const selectNextMove = (x: number, y: number, board: BoardCell[][]) => {
  // [
  //   [' ',' ',' '],
  //   [' ','p','r'],
  //   [' ','p','s'],
  //   [' ',' ',' '],
  // ]
}

const playGame = (chromosome: BoardCell[]) => {
  const board = decodeChromosomeToBoard(chromosome)
  
  //make game rules

  //count and return rounds the game can be played

  return 1;
}

const fitness = (chromosome: BoardCell[]) => {
  let successfulRounds = 0;

  successfulRounds = playGame(chromosome);

  return successfulRounds;
}