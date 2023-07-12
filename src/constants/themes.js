import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const ayuLight = createTheme({
  theme: 'light',
  settings: {
    background: '#FCFCFC',
    foreground: '#5C6166',
    caret: '#5d00ff',
    selection: '#035BD626',
    selectionMatch: '#9F40FF26',
    lineHighlight: '#035BD61a',
    gutterBackground: '#FCFCFC',
    gutterForeground: '#5C616666',
  },
  styles: [
    { tag: t.comment, color: '#787B8099' },
    { tag: t.variableName, color: '#0080FF' },
    { tag: [t.string, t.special(t.brace)], color: '#86B300' },
    { tag: t.number, color: '#A37ACC' },
    { tag: t.bool, color: '#A37ACC' },
    { tag: t.null, color: '#A37ACC' },
    { tag: t.keyword, color: '#FA8D3E' },
    { tag: t.operator, color: '#ED9366' },
  ],
});

export const ayuDark = createTheme({
  theme: 'dark',
  settings: {
    background: '#0D1017',
    foreground: '#BFBDB6',
    caret: '#FFFFFF',
    selection: '#409FFF26',
    selectionMatch: '#6C598026',
    lineHighlight: '#035BD61a',
    gutterBackground: '#0D1017',
    gutterForeground: '#BFBDB666',
  },
  styles: [
    { tag: t.comment, color: '#ACB6BF99' },
    { tag: t.variableName, color: '#E6B673' },
    { tag: [t.string, t.special(t.brace)], color: '#AAD94C' },
    { tag: t.number, color: '#D2A6FF' },
    { tag: t.bool, color: '#D2A6FF' },
    { tag: t.null, color: '#D2A6FF' },
    { tag: t.keyword, color: '#FF8F40' },
    { tag: t.operator, color: '#F29668' },
  ],
});

export const gruvbox = createTheme({
  theme: 'dark',
  settings: {
    background: '#282828',
    foreground: '#EBDBB2',
    caret: '#DEDEDE',
    selection: '#7C6F4126',
    selectionMatch: '#7C6F6426',
    lineHighlight: '#7C6F641A',
    gutterBackground: '#282828',
    gutterForeground: '#EBDBB266',
  },
  styles: [
    { tag: t.comment, color: '#92837499' },
    { tag: t.variableName, color: '#83A598' },
    { tag: [t.string, t.special(t.brace)], color: '#B8BB26' },
    { tag: t.number, color: '#D3869B' },
    { tag: t.bool, color: '#D3869B' },
    { tag: t.null, color: '#D3869B' },
    { tag: t.keyword, color: '#FB4934' },
    { tag: t.operator, color: '#EBDBB2' },
  ],
});

export const catpuccinLight = createTheme({
  theme: 'light',
  settings: {
    background: '#EFF1F5',
    foreground: '#4C4F69',
    caret: '#7287FD',
    selection: '#CCD0DA26',
    selectionMatch: '#CCD0DA26',
    lineHighlight: '#CCD0DA1A',
    gutterBackground: '#EFF1F5',
    gutterForeground: '#5C5F7766',
  },
  styles: [
    { tag: t.comment, color: '#787B8099' },
    { tag: t.variableName, color: '#DF8E1D' },
    { tag: [t.string, t.special(t.brace)], color: '#40A02B' },
    { tag: t.number, color: '#FE640B' },
    { tag: t.bool, color: '#FE640B' },
    { tag: t.null, color: '#FE640B' },
    { tag: t.keyword, color: '#8839EF' },
    { tag: t.operator, color: '#1E66F5' },
  ],
});

export const catpuccinDark = createTheme({
  theme: 'dark',
  settings: {
    background: '#1E1E2E',
    foreground: '#CDD6F4',
    caret: '#7287FD',
    selection: '#CCD0DA26',
    selectionMatch: '#CCD0DA26',
    lineHighlight: '#CCD0DA1A',
    gutterBackground: '#1E1E2E',
    gutterForeground: '#CDD6F466',
  },
  styles: [
    { tag: t.comment, color: '#BAC2DE99' },
    { tag: t.variableName, color: '#FAB387' },
    { tag: [t.string, t.special(t.brace)], color: '#A6E3A1' },
    { tag: t.number, color: '#F38BA8' },
    { tag: t.bool, color: '#F38BA8' },
    { tag: t.null, color: '#F38BA8' },
    { tag: t.keyword, color: '#CBA6F7' },
    { tag: t.operator, color: '#74C7EC' },
  ],
});
