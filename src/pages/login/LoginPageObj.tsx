import ClickEvent from "../../objects/ClickEvent";
import PageTemplate from "../../objects/PageTemplate";

class LoginPageObj extends PageTemplate {
  constructor(name: string, url: string, menuItems: ClickEvent[]) {
    super(name, url, menuItems);
  }
}

export default LoginPageObj;
