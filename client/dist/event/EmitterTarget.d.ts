import Emitter from "./Emitter.js";
export interface IEventHandler {
    (e: Emitter): void;
}
export default class EmitterTarget {
    private list;
    constructor();
    addEventListener(type: string, handler: IEventHandler): void;
    removeEventListener(type: string, handler: IEventHandler): void;
    dispatchEvent(evt: Emitter): void;
}
//# sourceMappingURL=EmitterTarget.d.ts.map