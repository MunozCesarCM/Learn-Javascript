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
