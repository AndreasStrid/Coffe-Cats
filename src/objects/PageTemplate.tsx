import ClickEvent from "./ClickEvent";

class PageTemplate {

    public name: string;
    public url: string;
    public menuItems: ClickEvent[];

    constructor(name: string, url: string, menuItems: ClickEvent[]) {
        this.name = name;
        this.url = url;
        this.menuItems = menuItems;

        this.redirect = this.redirect.bind(this);
    }
    public redirect() {
        window.location.replace(this.url);
    }
}

export default PageTemplate;
