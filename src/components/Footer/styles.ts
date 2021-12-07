import styled from 'styled-components';

export const FooterContent = styled.footer`
    margin:0;
    background-color: #222141;
    height: 25vh;
    padding:10vh;
    text-align: center;
   

    > h2 {
        
        font-family: 'Amatic SC', cursive;
        color: #78D33E;
        font-size: 38px;
        text-align: center;
        font-variant: small-caps; 
        padding: 15vh auto;
        text-shadow: 2px 0 #494C2F, 0 2px #494C2F, 2px 0 #494C2F, 0 -2px #494C2F;
    }
  
    @media screen and (max-width: 700px){
        height: 15vh;
        padding:3vh;

    }

`;