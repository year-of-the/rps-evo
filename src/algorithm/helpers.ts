const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;
const CHROMOSOME_LENGTH = BOARD_WIDTH * BOARD_HEIGHT;

export const randomGene = (genome: string[]) => {
  if (!genome.length) {
    throw Error('Missing genome; cannot access random gene')
  }
  return genome[Math.floor(Math.random() * genome.length)]
}

export const randomChromosome = (genome: string[], chromosomeLength: number) => {
  const chromosome: string[] = [];
  for (let i = 0; i < chromosomeLength; i++) {
    chromosome.push(randomGene(genome))
  }
  return chromosome;
}

export const makeBoardFromChromosome = (chromosome: string[]) => {
  const board: string[][] = [];

  for (let i = 0; i < BOARD_HEIGHT; i++) {
    //for each outer iteration, add a new row
    const row: string[] = [];
    for (let j = 0; j < BOARD_WIDTH; j++) {
      //for each row, push the associated gene in the chromosome
      row.push(chromosome[i*BOARD_WIDTH+j])
    }
    board.push(row);
  }

  return board;
}

export const playGame = (chromosome: string[]) => {
  const board = makeBoardFromChromosome(chromosome)
  
  //make game rules

  //count and return rounds the game can be played

  return 1;
}

export const fitness = (chromosome: string[]) => {
  let successfulRounds = 0;

  successfulRounds = playGame(chromosome);

  return successfulRounds;
}