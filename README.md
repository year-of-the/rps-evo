# rps-evo

## specs

Each of the following is a functions that you'll need. In concert they comprise a genetic algorithm (more or less). The functions below will be described in terms of their high level purpose. Implementation is up to you!

### randomGene

This function needs to return a random gene from the genome for the problem you're modeling/evolving. If your problem was the game of life, then your genome might be `[1, 0]` (depending on your implementation), and so this function would randomly select `1` or `0` and return that value. (generally uniform distribution is used)

### randomChromosome

This function returns an entire chromosome of genes, so like in the above, if your genome was `[1, 0]` for a game of life related problem and your board was 10x10, then a chromosome might be an entire board state, aka an array of 100 randomly selected genes. (generally uniform distribution is used)

### fitness

This function needs to take a chromosome and return some numeric evaluation of its fitness. The fitter the better/stronger/more successful. Think of this as your reward system. chromosomes which preform well need to be rewarded for doing so. The value this function returns can be thought of as the chromosome's "points" or reward.

Generally this function is the meat of your genetic algorithm. The rest of the stuff you need is boiler plate. Other than specifying what the genome is and how chromosomes are structured, everything else you'll need/write is not specific to the problem or solution you're evolving for. The fitness function is often the entire ruleset for the game/ecosystem/problem, distilled into a scoring function.

### naturalSelection

This function takes an array of chromosomes paired/zipped with their fitnesses and a number of survivors, then returns a pseudorandom-proportionally-chosen selection of them to become the progenitors for the net generation.

### mutate

This function takes a chromosome (or two) and returns a mutated version of it (without mutating the original). There are several kinds of possible mutations, and most have some analog in the natural world, such as sexual reproduction, random mutation, etc.

This is a place where you can get creative. The types of mutations that are appropriate for some problems are not for others. You can have multiple mutation functions. You can invent new forms of mutation. But be sparing, mutations are used as a means of making sure chromosomes don't get stuck in some local maximum, but if you take a strong gene and mutate it too much, it might not be strong at all anymore, and without competition the un-mutated strong gene will still be stuck.

### generatePopulation

This function takes a population size and creates a series of random chromosomes to represent a population.

### evolve

This function takes a population, evaluates each chromosome's fitness, selects the survivors, creates a new population from the survivors and some combination of their clones, offspring, and mutations that is of the same size as the original input population. Then, returns the newer, fitter, population.
