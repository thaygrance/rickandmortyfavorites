import styled from 'styled-components';
import backgroundImg from "../../assets/images/backgroundImg.jpg"

export const HomeContainer = styled.main`
    max-width: 100%;
    margin: 0 auto;
    padding: 0px 20px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-bottom:60px;
  
`;

export const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >img{
        width: 400px;
        height:400px;
        margin-bottom: 50px;;
    }

    >h3 {
        font-size: 32px;
        color: #494C2F;
        text-shadow: 2px 0 #78D33E, 0 2px #78D33E,
        2px 0 #78D33E, 0 -2px #78D33E;
        margin:0;
    }


    @media screen and (max-width: 700px){

    >h3 {
    font-size: 20px;
    }

}
`;

export const LoadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    > p {
        font-size: 26px;
        color:black;
        margin:0;
    }

`; 