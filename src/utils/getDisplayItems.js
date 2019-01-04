/**
 * @flow
 */

import isOdd from './isOdd';

/**
 * Returns the visible paginator buttons
 */
export default function getDisplayItems(
  items: string[] | number[],
  activePage: number,
  pageRangeDisplayed: number,
): number[] {
  // removes the first and the last items from the list
  return items
    .reduce((a, c, i, l) => {
      if (c > 1 && c < l.length) {
        a.push(c);
      }
      return a;
    }, [])

    // gets the range of displayed pages
    .filter((item, idx, list) => {
      if (isOdd(pageRangeDisplayed)) {
        return item === activePage - 1 || item === activePage || item === activePage + 1;
      }

      let op = 1;
      if (activePage >= list.length + 1) {
        op = -1;
      }

      return item === activePage || item === activePage + op;
    });
}
