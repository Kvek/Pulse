import express, { Express } from 'express';
import http from 'http';
import next, { NextApiHandler } from 'next';
import { Server } from 'socket.io';

import properties from '../pages/api/properties.json' assert { type: 'json' };

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: Server = new Server();
    io.attach(server);

    io.on('connect', (socket) => {
        const interval = setInterval(() => {
            const model = properties[Math.floor(Math.random() * properties.length)];
            socket.emit('property', { property: model });
        }, 5000);

        socket.on('disconnect', () => {
            console.log('client disconnected');
            clearInterval(interval);
        });
    });

    app.get('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(3000, () => {
        console.log(`> Ready on http://localhost:3000/`);
    });
});
