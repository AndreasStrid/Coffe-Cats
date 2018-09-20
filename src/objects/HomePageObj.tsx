import H1PImage from '../components/H1PImage'
import ClickEvent from "./ClickEvent";
import PageTemplate from "./PageTemplate";

class HomePageObj extends PageTemplate {

    public H1PImageComponetns: H1PImage[];

    constructor(name: string, url: string, menuItems: ClickEvent[], H1PImageComponetns: H1PImage[]) {
        super(name, url, menuItems)
        this.H1PImageComponetns = H1PImageComponetns;

    }
}

export default HomePageObj;
