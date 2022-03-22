import { ActiveLocation, Location } from 'components/Icons';
import { latLng } from 'leaflet';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { mapCenterSelector, setMapCenter } from 'store/map';
import { ModelInterface } from 'types';

import {
    ActiveTag,
    Address,
    Button,
    Container,
    Content,
    Current,
    LocationTag,
    Title,
} from './styles';

export const Property = ({
    isLeading,
    model: {
        address1,
        city,
        coordinates: { lat, lng },
        postalCode,
        state,
    },
}: {
    isLeading: boolean;
    model: ModelInterface;
}) => {
    const dispatch = useAppDispatch();
    const center = useAppSelector(mapCenterSelector) as any;

    const setCenter = () => dispatch(setMapCenter(latLng(lat, lng)));

    const isCurrentCenter = () => {
        if (!center) return false;

        return center?.lat === lat && center?.lng === lng;
    };

    return (
        <Container>
            <ActiveTag>
                {isCurrentCenter() ? <ActiveLocation /> : isLeading ? <Current /> : null}
            </ActiveTag>
            <Content>
                <Title>{address1}</Title>
                <Address>
                    {city}, {postalCode}, {state}
                </Address>
            </Content>

            <LocationTag>
                <Button onClick={setCenter}>
                    <Location />
                </Button>
            </LocationTag>
        </Container>
    );
};
