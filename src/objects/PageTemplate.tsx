import ClickEvent from "./ClickEvent";

class PageTemplate {

    public name: string;
    public url: string;
    public menuItems: ClickEvent[];
    public redirect: (name: string, url: string) => void;

    constructor(name: string, url: string, menuItems: ClickEvent[]) {
        this.name = name;
        this.url = url;
        this.menuItems = menuItems;

        this.clickHandler = this.clickHandler.bind(this);
    }
    public setRedirect(func: (name: string, url: string) => void): void {
        this.redirect = func;
    }
    public clickHandler(e: React.MouseEvent<HTMLElement>) {
        this.redirect(this.name, this.url);
    }
}

export default PageTemplate;
