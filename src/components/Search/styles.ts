import styled from 'styled-components';

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

> input {
    margin: 40px 0;
    width: 50vh;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    border: 1px solid black;
    border-radius: 5px;

    transition: filter 0.2s;

    transition: ease-in;

    &:hover {
        filter: brightness(0.9);
        border: 2px solid yellow;
    }

    &:focus {
        border:3px solid orange;
    }
}
> p {
    margin:10px;
    font-size:18px;
}
`;