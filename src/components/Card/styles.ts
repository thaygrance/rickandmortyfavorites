import styled from 'styled-components';

export const GridDiv = styled.div`
    display: grid;
    grid-gap:3.2rem;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content:center;  
`;

export const CardContainer = styled.div`
    width: 300px;
    overflow: hidden;
    border-radius:8px;
    color: #222141;
    box-shadow: 0px 0px 15px --5px;
    transition: 0.3s;
    animation: ease-in;
    border: 3px solid #494C2F;
    background-color: #6EB568;

    &:hover {
       box-shadow: 0px 0px 20px 0px;
       transform: scale(1.05);
    } 
`;


export const ImgDiv = styled.div`
    position: relative;
    overflow: hidden;
    height: 300px;

    >div {
        position: absolute;
        top: 10px;
        right: 15px;
        z-index:1;
        cursor: pointer;
    }
`;

export const CardContent = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;

    >div h3, div p {
        margin: 0;
        padding: 0;
    }
    >div h3 {
        color:#222141;
        font-size: 28px;
        margin-bottom: 0.5rem;
    }

    >div p {
        font-size: 30px;
        font-weight: 700;
        color:#494C2F;
    }



`;