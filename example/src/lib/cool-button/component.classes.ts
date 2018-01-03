



export class ModelChild {
    public name: string;
}


export class ModelParent {
    public child: ModelChild;
    public name: string;
}
export interface ModelInterface {
    render(component: ModelParent) : ModelChild;
}

export abstract class MyAbstractClass {
    value: ModelParent = new ModelParent();

    abstract setValue(parent: ModelParent): void;

    getValue(): ModelParent {
        return this.value;
    }

}
