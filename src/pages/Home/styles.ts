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

    >h3 {
        font-size: 24px;
        color: black;
        margin:0;
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