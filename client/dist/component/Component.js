import EmitterTarget from "../event/EmitterTarget.js";
import Utils from "../utils/Utils.js";
class Component extends EmitterTarget {
    constructor(type) {
        super();
        this.elem = document.createElement(type);
    }
    appendTo(parent) {
        if (typeof parent === "string")
            parent = document.querySelector(parent);
        if (parent instanceof HTMLElement)
            parent.appendChild(this.elem);
        return parent;
    }
    insertTo(parent, nextElem) {
        if (typeof parent === "string")
            parent = document.querySelector(parent);
        if (typeof nextElem === "string")
            nextElem = document.querySelector(nextElem);
        if (parent instanceof HTMLElement && nextElem instanceof HTMLElement)
            parent.insertBefore(this.elem, nextElem);
        return parent;
    }
    static setStyle(str) {
        if (this.styleBool)
            return;
        this.styleBool = true;
        Utils.setCss(str);
    }
}
Component.styleBool = false;
export default Component;
//# sourceMappingURL=Component.js.map