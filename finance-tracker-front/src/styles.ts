import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`
  :root {
    line-height: 1.5;
    font-weight: 400;

    /* color-scheme: light dark; */
    color: #242424;
    background-color: #ffffffde;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  }
  a{
    color: #007aff;
    font-weight: 500;
    transition: all ease 350ms;
    text-decoration: none;
  } 
  a:hover{
    text-decoration: underline;
  }
  li{
    list-style: none;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
  }
  

  .subtitle{
    font-weight: 600;
  }

`;
