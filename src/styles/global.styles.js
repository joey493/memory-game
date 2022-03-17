import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, *::before, *::before {
        box-sizing: border-box;
    }
    /* Reset margins */
    body,
    h1, h2, h3, h4, h5, h6,
    p, figure, picture {
        margin: 0;
    }
    h1, h2, h3, 
    h4, h5, h6, p {
        font-weight: 400;
    }
    a {
    text-decoration: none;
    }
    /* set up body */
    body {
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        min-height: 100vh;
        background-color: ${(({theme}) => theme.clrTheme.backgroundClr)};
        color: ${({theme}) => theme.mainTheme.mainClr};
    }
    /* make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    /* make form elements easier to work with */
    select, button,
    textarea, input {
        font: inherit;
    }
    /* make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
`

export const Footer = styled.footer`
    background-color: ${(({theme}) => theme.clrTheme.cardClr)};
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: .25rem;

    @media (max-width: 760px) {
        margin-top: 2rem;
        position: static;
    }
`


export default GlobalStyles