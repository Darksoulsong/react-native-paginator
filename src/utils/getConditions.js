/**
 * @flow
 */

/**
 * Gets the conditions for next and previous range steps
 */
export function getConditions(activePage: number, totalItems: number) {
  return {
    nextStepIsOutOfRange: activePage + 1 > totalItems,
    previousStepIsOutOfRange: (activePage - 1) < 1,
  };
}