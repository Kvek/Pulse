import styled from '@emotion/styled';

export const Container = styled.section`
    margin: 20px;
    position: relative;
    width: 100%;

    .leaflet-container {
        height: 100%;
        width: 100%;
    }

    .property {
        background-color: green;
        border-radius: 50%;
    }

    .init {
        background-color: orange;
        z-index: 1000;
    }
`;

export const Button = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1001;
`;
