import styled from 'styled-components';
import headerImg from "../../assets/images/headerImg.png"


export const HeaderTag = styled.header`
    padding:20px;
    height: 40vh;
    background-color: #222141;
    display:flex;
    background-image:url(${headerImg});
    background-size: 95%auto;
    background-repeat: no-repeat;
    background-position: center center;
    justify-content: flex-end;
    

    > a {
        text-decoration: none;
        display:flex;
        margin-top:15vh;
      
       
        
    }

    > a button {
        height: 5vh;
        border-radius: 5px;
        background-color: #6eb568;
        color: #222141;
        font-weight: 700;
        font-size: 24px;
        padding: 10px 20px;
        margin-right: 10vh;
        display:flex;
        cursor: pointer;
        border:0;
        transition: filter 0.2s;
        align-items: center;
        justify-content: center;
        min-width: 40vh;
        
        > img {
            width: 24px;
            margin-right: 12px;
        }

        &:hover {
            filter: brightness(1.3);
        }
    }
`;


