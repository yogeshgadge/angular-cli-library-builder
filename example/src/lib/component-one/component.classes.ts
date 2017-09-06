export class ComponentChild {
    public name: string;
}
export class ComponentOne {
    public child: ComponentChild;
    public name: string;
}
export interface ComponentInterface {
    render(component: ComponentOne) : ComponentChild;
}