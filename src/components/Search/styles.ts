import styled from 'styled-components';

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

> input {
    margin: 60px 0;
    width: 50vw;
    height: 50px;
    font-size: 24px;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    padding-left: 10px;
    border: 3px solid #494C2F;
    border-radius: 5px;
    background-color:#F4FFB5;
    transition: filter 0.2s;

    transition: ease-in;

    &:hover {
        filter: brightness(0.95);
        border: 2px solid #78D33E;
    }

    &:focus {
        border:3px solid #78D33E;
    }
}
> p {
    margin:10px;
    font-size:18px;
}
`;