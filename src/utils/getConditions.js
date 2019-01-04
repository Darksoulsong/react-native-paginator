/**
 * @flow
 */

/**
 * Gets the conditions for next and previous range steps
 */
export default function getConditions(activePage: number, totalItems: number) {
  return {
    nextStepIsOutOfRange: activePage + 1 > totalItems,
    previousStepIsOutOfRange: (activePage - 1) < 1,
  };
}
