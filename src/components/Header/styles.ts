import styled from 'styled-components';
import headerImg from "../../assets/images/headerImg.png"


export const HeaderTag = styled.header`
    top:0px;
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
        width: 15vw;
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
        
        > img {
            width: 24px;
            margin-right: 12px;
        }

        &:hover {
            filter: brightness(1.3);
        }
    }

    @media screen and (max-width: 700px){

        width:100%;
        position:fixed;

        height: 25vh;
        z-index:2;

        > a {
            margin-top:7vh;
        }

        > a button {
            margin: 0;
            width: 25vw;
            font-size: 18px;
            margin-left: 63vw;

        > img {
            width: 18px;
            margin-right: 6px;

        }


        }
    }
`;


