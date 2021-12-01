import styled from 'styled-components';

export const HomeContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 60px 20px;
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