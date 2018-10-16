import ClickEvent from "./ClickEvent";
import PageTemplate from "./PageTemplate";

class LoginPageObj extends PageTemplate {
  constructor(name: string, url: string, menuItems: ClickEvent[]) {
    super(name, url, menuItems);
  }
}

export default LoginPageObj;
