import { DivIcon, latLng, latLngBounds } from 'leaflet';
import { ModelInterface } from 'types';

export const createIcon = (init: boolean) =>
    new DivIcon({
        className: `property ${init && 'init'}`,
        iconSize: init ? [20, 20] : [10, 10],
    });

export const getBounds = (models: Array<ModelInterface>) =>
    latLngBounds(models.map((model) => latLng(model.coordinates.lat, model.coordinates.lng)));
