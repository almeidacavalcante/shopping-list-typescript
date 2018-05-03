class Item {
    
    constructor(
        private _name: string
    ){}

    get name(): string {
        return this._name;
    }

    set name(text: string) {
        this.name = text;
    }
}