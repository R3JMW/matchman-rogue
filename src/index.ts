import { Application } from 'pixi.js';

const app: Application = new Application({
    width: 800,
    height: 600,
    antialias: true,
    resolution: 1,
    backgroundColor: 0x1d9ce0
});

document.body.appendChild(app.view as any);