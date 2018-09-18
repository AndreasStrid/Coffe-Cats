class ClickEvent {

    public name: string;
    public eventHandler: (e: React.MouseEvent<HTMLElement>) => void;
    // (method) Login.logIn(e: React.MouseEvent<HTMLElement>): void

    constructor(name: string, eventHandler: (e: React.MouseEvent<HTMLElement>) => void) {
        this.name = name;
        this.eventHandler = eventHandler;
    }
}

export default ClickEvent;
