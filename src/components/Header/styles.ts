import styled from 'styled-components';

export const HeaderTag = styled.header`
    padding: 25px 20px;
    height: 40vh;
    background-color: white;
`;

export const HeaderContainer = styled.div`
    max-width:1120px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >h1 {
        font-size: 36px;
        color:black;
        margin:0;
    }

    > a {
        text-decoration: none;
    }

    > a button {
        height: 40px;
        border-radius: 5px;
        font-size: 18px;
        background-color: black;
        color: white;
        padding: 0 30px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        cursor: pointer;
        border:0;
        transition: filter 0.2s;

    > img {
        width: 24px;
        margin-right:12px;
    }

    &:hover {
        filter: brightness(0.9);
    }
}
`;


