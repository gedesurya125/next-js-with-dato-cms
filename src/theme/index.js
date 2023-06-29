import { theme as piecesTheme } from '@thepuzzlers/pieces';
// client imports
import { fontFamilies } from './fonts/fontFamilies';
import { colors } from './colors';
import { buttons, links, cards } from './elements';
import { shadows, radii } from './styles';
import { forms } from './forms';

const breakpoints = [
  '@media screen and (min-width: 10000px) and (orientation: portrait)', // not triggered phone XL
  '@media screen and (min-width: 750px)',
  '@media screen and (min-width: 12000px) and (orientation: portrait)', // not triggered phone Landscape
  '@media screen and (min-width: 1000px)',
  '@media screen and (min-width: 1400px)'
];

export const theme = {
  // pieces styles
  breakpoints: breakpoints,
  measure: piecesTheme.measure,
  grids: piecesTheme.grids,
  // local styles
  fonts: fontFamilies,
  colors,
  buttons,
  links,
  cards,
  shadows,
  radii,
  text: {
    default: {
      //? fix the font looks different with figma https://forum.figma.com/t/font-in-browser-seem-bolder-than-in-the-figma/24656/4
      // for safari and chrome
      '-webkit-font-smoothing': 'antialiased',
      //for firefox
      '-moz-osx-font-smoothing': 'grayscale',
      //other
      fontSmooth: 'never'
    },
    heading: {
      fontWeight: 'normal',
      fontFamily: 'primary.normal',
      color: 'primary',
      fontFeatureSettings:
        "'salt' on, 'ss01' on, 'ss04' on, 'ss05' on, 'ss06' on, 'ss07' on",
      variant: 'text.default'
    },
    body: {
      normal: {
        variant: 'text.default',
        fontFamily: 'body.normal',
        fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off",
        color: 'primary',
        fontWeight: 'normal'
      },
      medium: {
        fontFamily: 'body.medium',
        fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off",
        color: 'primary',
        fontWeight: 'normal',
        variant: 'text.default'
      },
      semiBold: {
        fontFamily: 'body.semiBold',
        fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off",
        color: 'primary',
        fontWeight: 'normal',
        variant: 'text.default'
      }
    },
    checkoutFormTitle: {
      variant: 'text.body.normal',
      lineHeight: 1.25,
      fontSize: ['1.8rem', null, '2rem', null, '2.4rem', '2.4rem']
    }
  },
  forms,
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
      bg: 'background',
      hr: {
        borderWidth: 0
      }
    },
    h1: {
      fontSize: ['4rem', '4.4rem', '4.8rem', '4.4rem', '4.8rem', '5.2rem'],
      // fontFamily: 'primary.normal',
      variant: 'text.heading',
      mb: ['3rem', '3.8rem', '4rem', '3.8rem', '4rem', '4.2rem'],
      lineHeight: 1.15,
      hyphens: 'auto'
    }
  }
};
