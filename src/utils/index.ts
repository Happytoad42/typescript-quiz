/**
 * Pseudo-randomly changes item positions in array
 * @param {Array} array Array of strings to randomise
 * @returns {Array} new array with randomized item positions
 */
export const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
}