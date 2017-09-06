



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