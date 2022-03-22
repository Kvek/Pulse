import styled from '@emotion/styled';

export const Container = styled.section`
    align-items: center;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 10px 15px 0;
    padding: 5px;

    &:last-of-type {
        padding-bottom: 20px;
    }

    &:hover {
        background-color: rgba(245, 245, 245, 0.85);
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    font-size: 16px;
    margin: 0;
`;

export const Address = styled.p`
    font-size: 12px;
    margin: 0;
`;

export const Button = styled.button`
    justify-self: start;
`;

export const ActiveTag = styled.span`
    width: 20px;
`;

export const Content = styled.div`
    max-width: calc(100% - 50px);
    width: 100%;
`;

export const Current = styled.span`
    background-color: orange;
    border-radius: 50%;
    display: flex;
    height: 7px;
    width: 7px;
`;

export const LocationTag = styled.span`
    width: 20px;

    button {
        background: transparent;
        border: none;
        cursor: pointer;

        svg {
            transition: transform 0.025s ease-in;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`;
