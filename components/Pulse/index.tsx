import dynamic from 'next/dynamic';

import { Container, Loading } from './styles';

const Map = dynamic(() => import('components/Map'), {
    loading: () => <Loading>Loading Map&hellip;</Loading>,
    ssr: false,
});

const Properties = dynamic(() => import('components/Properties'), {
    loading: () => <Loading>Loading</Loading>,
    ssr: false,
});

export const Pulse = () => (
    <Container>
        <Map />
        <Properties />
    </Container>
);
