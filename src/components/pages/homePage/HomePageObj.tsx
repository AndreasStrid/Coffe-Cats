import ClickEvent from "../../../objects/ClickEvent";
import PageTemplate from "../../../objects/PageTemplate";
import H1PImageObj from '../../h1PImage/H1PImageObj'

class HomePageObj extends PageTemplate {

    public H1PImageComponetns: H1PImageObj[];

    constructor(name: string, url: string, menuItems: ClickEvent[], H1PImageComponetns: H1PImageObj[]) {
        super(name, url, menuItems)
        this.H1PImageComponetns = H1PImageComponetns;

    }
}

export default HomePageObj;
