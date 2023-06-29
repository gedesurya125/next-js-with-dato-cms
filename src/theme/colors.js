// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  primary: '#2C483B',
  secondary: '#E9E5DA',
  white: '#FFFFFF',
  background: '#F3F1EA',
  red: '#EC441F',
  beige: '#D7D1C2',
  beige100: '#EEEBE1',
  beige200: '#E9E5DA',
  disabled: 'gray',
  black: '#000000',
  hover: '#23392F'
};

const textColors = {
  text: base.primary,
  heading: base.primary,
  background: base.background
};

export const colors = {
  // defaults
  ...base,
  ...textColors
};
