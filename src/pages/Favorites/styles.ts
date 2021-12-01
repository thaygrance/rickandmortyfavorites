import styled from "styled-components";

export const FavoritesContainer = styled.main`
    max-width:1120px;
    margin: 0 auto;
    padding: 60px 20px;

    > h1 {
        margin: 35px auto;
        font-size: 48px;
        text-align: center;
    }
`;

export const LoadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    >p {
        font-size: 24px;
        margin: 0;
    }
`;

export const NotFavoritesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >h3 {
        margin-top:45px;
        font-size:20px;
        margin:0;
    }

    >img {
        margin-top:45px;
    }
`;