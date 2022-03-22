import type { NextApiRequest, NextApiResponse } from 'next';

import properties from './properties.json';

export default (_: NextApiRequest, response: NextApiResponse) =>
    response.json(properties.slice(0, 5));
