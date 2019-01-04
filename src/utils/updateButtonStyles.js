/**
 * @flow
 */

type Style = {
  [x: string]: string
}

/**
 * Receives an existing style and returns
 */
export default function updateButtonStyles(
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
