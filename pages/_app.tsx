import { Provider } from 'react-redux';

import styled from '@emotion/styled';

import 'node_modules/leaflet/dist/leaflet.css';
import { AppProps } from 'next/app';
import { store } from 'store';

const Container = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Container>
                <Component {...pageProps} />
            </Container>
        </Provider>
    );
}
