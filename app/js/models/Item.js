class Item {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(text) {
        this.name = text;
    }
}
