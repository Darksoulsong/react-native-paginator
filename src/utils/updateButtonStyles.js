/**
 * @flow
 */

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
