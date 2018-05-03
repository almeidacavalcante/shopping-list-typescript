abstract class View<T> {

    private _element: JQuery;

    constructor(selector: string){
        this._element = $(selector);
    }

    /**
     * update
     */
    public update(model: T) : void {
        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}