import EmitterTarget from "../event/EmitterTarget.js";
export default abstract class Component extends EmitterTarget {
    protected elem: HTMLElement;
    private static styleBool;
    constructor(type: string);
    appendTo(parent: HTMLElement | string): HTMLElement;
    insertTo(parent: HTMLElement | string, nextElem: HTMLElement | string): HTMLElement;
    protected static setStyle(str: string): void;
    abstract setCss(): void;
}
//# sourceMappingURL=Component.d.ts.map