import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{ 
    font-family: 'Shadows Into Light Two', cursive;
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

}
body {
    background-color:#000;
}

p, input, button {
    font-family: 'Amatic SC', cursive;
    font-weight: 400;
}

button {
    cursor: pointer;
}
`;