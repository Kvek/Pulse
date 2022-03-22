import { useEffect, useRef } from 'react';

import axios from 'axios';
import { Pulse } from 'components/Pulse';
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addProperties, propertiesSelector, setProperties } from 'store/properties';
import { ModelInterface } from 'types';

export default function Index({ properties }: { properties: Array<ModelInterface> }) {
    const dispatch = useAppDispatch();

    const propertiesList = useAppSelector(propertiesSelector);

    const propertiesListref = useRef(propertiesList);

    useEffect(() => {
        propertiesListref.current = propertiesList;
    }, [propertiesList]);

    useEffect(() => {
        dispatch(setProperties(properties));

        io().on('property', ({ property }: { property: ModelInterface }) => {
            const duplicatePropertyIndex = propertiesListref.current.findIndex(
                ({ address1 }) => address1 === property.address1
            );

            if (duplicatePropertyIndex !== -1) {
                const newList = [...propertiesListref.current];
                newList.splice(duplicatePropertyIndex, 1);
                newList.unshift(property);

                dispatch(setProperties(newList));
            } else {
                dispatch(addProperties([property]));
            }
        });

        () => {
            io().disconnect();
        };
    }, []);

    return <Pulse />;
}

Index.getInitialProps = async () => {
    const instance = axios.create({ baseURL: 'http://localhost:3000' });
    return { properties: (await instance.get('/api/properties')).data };
};
