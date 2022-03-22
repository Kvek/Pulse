import { Property } from 'components/Property';
import { useAppSelector } from 'store/hooks';
import { propertiesSelector } from 'store/properties';

import { Container } from './styles';

const Properties = () => {
    const models = useAppSelector(propertiesSelector);

    return (
        <Container>
            {models.map((model, index) => (
                <Property isLeading={index === 0} key={model.address1} model={model} />
            ))}
        </Container>
    );
};

export default Properties;
