import ClickEvent from "./ClickEvent";
import H1PImageObj from "./H1PImageObj";
import PageTemplate from "./PageTemplate";

class HomePageObj extends PageTemplate {
  public H1PImageComponetns: H1PImageObj[];

  constructor(
    name: string,
    url: string,
    menuItems: ClickEvent[],
    H1PImageComponetns: H1PImageObj[]
  ) {
    super(name, url, menuItems);
    this.H1PImageComponetns = H1PImageComponetns;
  }
}

export default HomePageObj;
