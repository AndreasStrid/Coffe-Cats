import ClickEvent from "./ClickEvent";

class PageTemplate {

    public name: string;
    public menuItems: ClickEvent[];

    constructor(name: string, menuItems: ClickEvent[]) {
        this.name = name;
        this.menuItems = menuItems;
    }
}

export default PageTemplate;
