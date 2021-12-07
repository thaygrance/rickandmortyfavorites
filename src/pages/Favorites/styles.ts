import styled from "styled-components";
import backgroundImg from "../../assets/images/backgroundImg.jpg"

export const FavoritesContainer = styled.main`
    max-width: 100%;
    margin: 0 auto;
    padding: 60px 20px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-bottom:60px;

    > h1 {
        color: #222141;
        font-variant: small-caps; 
        padding: 35px auto;
        font-size: 48px;
        text-align: center;
        margin-bottom: 50px;
        text-shadow: 2px 0 #78D33E, 0 2px #78D33E,
      2px 0 #78D33E, 0 -2px #78D33E;
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
        font-size: 32px;
        color: #494C2F;
        text-shadow: 2px 0 #78D33E, 0 2px #78D33E,
        2px 0 #78D33E, 0 -2px #78D33E;
        margin:0;
    }

        
    >img{
        width: 400px;
        height:400px;
        margin-bottom: 50px;;
    }
    
`;