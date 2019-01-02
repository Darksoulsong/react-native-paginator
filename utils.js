/**
 * @flow
 */

type Style = {[x: string]: string | number};

export function isOdd(num: number) {
  return num % 2 === 1;
}

export function getItems(totalItems: number, itemsPerPage: number): number[] {
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

/**
 * Returns the visible paginator buttons
 */
export function getDisplayItems(
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

/**
 * Receives an existing style and returns
 */
export function updateButtonStyles(
  previousStyle: Style,
  disabledStyle: Style,
  buttonIsDisabled = false,
) {
  let btn = previousStyle;

  if (buttonIsDisabled) {
    btn = {
      ...btn,
      ...disabledStyle,
    };
  }

  return btn;
}

export function getConditions(activePage: number, totalItems: number) {
  return {
    nextStepIsOutOfRange: activePage + 1 > totalItems,
    previousStepIsOutOfRange: (activePage - 1) < 1,
  };
}

export function getButtonStyles(
  previousStepIsOutOfRange: boolean,
  nextStepIsOutOfRange: boolean,
  defaultStyles: Style,
  newStyles: Style,
): {[x: string]: Style} {
  const buttonStyle = {
    ...defaultStyles.item,
    ...newStyles.buttonStyles,
  };

  const buttonActiveStyle = {
    ...defaultStyles.item,
    ...newStyles.buttonActiveStyles,
  };

  const buttonAltStyle = {
    ...defaultStyles.itemAlt,
    ...newStyles.buttonAltStyles,
  };

  const buttonControlStyle = {
    ...defaultStyles.itemControl,
    ...newStyles.buttonControlStyles,
  };

  const goPreviousButtonStyle = updateButtonStyles(
    buttonControlStyle,
    defaultStyles.itemDisabled,
    previousStepIsOutOfRange,
  );

  const goNextButtonStyle = updateButtonStyles(
    buttonControlStyle,
    defaultStyles.itemDisabled,
    nextStepIsOutOfRange,
  );

  return {
    buttonStyle,
    buttonActiveStyle,
    buttonAltStyle,
    buttonControlStyle,
    goPreviousButtonStyle,
    goNextButtonStyle,
  };
}
