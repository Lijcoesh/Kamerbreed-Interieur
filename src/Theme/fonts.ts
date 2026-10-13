// @font-face-regels voor de zelf gehoste fonts. Alleen latin: de site is Nederlands.

import sansItalic from 'src/Resources/Fonts/source-sans-3-latin-wght-italic.woff2';
import sans from 'src/Resources/Fonts/source-sans-3-latin-wght-normal.woff2';
import serif from 'src/Resources/Fonts/source-serif-4-latin-opsz-normal.woff2';

const latinRange =
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';

export const fontFaces = [
    {
        fontFamily: 'Source Sans 3',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '200 900',
        src: `url(${sans}) format('woff2-variations')`,
        unicodeRange: latinRange,
    },
    {
        fontFamily: 'Source Sans 3',
        fontStyle: 'italic',
        fontDisplay: 'swap',
        fontWeight: '200 900',
        src: `url(${sansItalic}) format('woff2-variations')`,
        unicodeRange: latinRange,
    },
    {
        fontFamily: 'Source Serif 4',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '200 900',
        src: `url(${serif}) format('woff2-variations')`,
        unicodeRange: latinRange,
    },
];
