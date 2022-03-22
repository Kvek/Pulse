import { useCallback, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

import { Map as MapInterface } from 'leaflet';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { mapCenterSelector, setMapCenter } from 'store/map';
import { propertiesSelector } from 'store/properties';
import { ModelInterface } from 'types';

import { Button, Container } from './styles';
import { createIcon, getBounds } from './utils';

const MapMarker = ({
    index,
    model: {
        coordinates: { lat, lng },
    },
}: {
    index: number;
    model: ModelInterface;
}) => {
    const center = useAppSelector(mapCenterSelector);

    const map = useMap();

    useEffect(() => {
        if (center) map.setView(center, 13);
    }, [center]);

    return <Marker icon={createIcon(index === 0)} position={[lat, lng]} />;
};

const Map = () => {
    const dispatch = useAppDispatch();
    const models = useAppSelector(propertiesSelector);

    const ref = useRef<undefined | MapInterface>();

    const handleFitBounds = useCallback(() => {
        dispatch(setMapCenter(null));

        ref.current?.fitBounds(getBounds(models), { padding: [20, 20] });
    }, [models]);

    const whenCreatedhandler = (map: MapInterface) => {
        ref.current = map;
        handleFitBounds();
    };

    return (
        <Container>
            <MapContainer center={[51.505, -0.09]} whenCreated={whenCreatedhandler} zoom={13}>
                <TileLayer url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png" />

                {models?.map((model, index) => (
                    <MapMarker index={index} key={model.address1} model={model} />
                ))}
            </MapContainer>

            <Button onClick={handleFitBounds}>Reset View</Button>
        </Container>
    );
};

export default Map;
