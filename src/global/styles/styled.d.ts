// Arquivo para sobrescrever tipos do styled components

import 'styled-components';

import theme from './theme';

// declare acessa o modulo
declare module 'styled-components' {
    // O tipo themetype pega o mesmo tipo e informações do theme, para extender depois pelo DefaultTheme
    type ThemeType = typeof theme

    // DefaultTheme já existe dentro do ThemeProvider
    export interface DefaultTheme extends ThemeType {}
}