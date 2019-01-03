/**
 * @flow
 */

/**
 * Creates the full number of pages
 */
export default function getItems(totalItems: number, itemsPerPage: number): number[] {
  const total = totalItems / itemsPerPage;

  return new Array(Math.ceil(total))
    .fill('&nbsp;')
    .reduce((a, c, i) => {
      if (i < total) {
        a.push(c);
      }

      return a;
    }, [])
    .map((v, k) => k + 1);
}
