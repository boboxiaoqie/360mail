/// <reference types="node" />
import { Server } from "http";
export type BodyType = string | {
    [key: string]: any;
};
export default class ServerMain {
    server: Server;
    router: string;
    parmes?: {
        [key: string]: any;
    };
    body?: BodyType;
    constructor(_port?: number);
    port(_port: number): ServerMain;
    private serverHandler;
    private getBody;
}
//# sourceMappingURL=ServerMain.d.ts.map