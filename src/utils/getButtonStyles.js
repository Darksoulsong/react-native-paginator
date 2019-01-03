/**
 * @flow
 */

/**
 * Merges the default styles with the user supplied ones
 */
export default function getButtonStyles(
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
    ...defaultStyles.itemActive,
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
