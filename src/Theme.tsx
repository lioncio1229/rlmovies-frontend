import React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";

interface Colors {
    primary: string,
    secondary: string,
    success: string,
    warning: string,
    danger: string,
    info: string,
    light: string,
    dark: string,
    background: string,
    text: string,
}

interface Size {
    small?: string,
    medium?: string,
    large?: string
}

interface FontWeights {
    regular: number,
    medium: number,
    bold: number,
}


export interface Theme {
    colors: Colors,
    fontSizes: Size,
    fontWeights: FontWeights,
    spacing: Size,
    shadow: Size,
}

const theme : Theme = {
    colors: {
      primary: '#275CCC',
      secondary: '#EBEBEB',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      background: '#F4F6F8',
      text: "#969595",
    },
    fontSizes: {
      small: '14px',
      medium: '16px',
      large: '18px'
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px'
    },
    shadow: {
        medium: '0 4px 4px #a8a8a8'
    }
};

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
        background-color: ${theme.colors.background};
    }

    #root {
        height: 100vh;
    }
`

interface Props {
    children: React.ReactNode;
}

export default function({children} : Props)
{
    return <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
}