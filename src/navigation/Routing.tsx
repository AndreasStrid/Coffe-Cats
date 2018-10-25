import { URL_ARRAY, URL } from "src/content/Variables"

class Routing {

    public static mainPage = URL.HOME;

    public static browserInput(browserUrl: string): string {

        const found = URL_ARRAY.find((url: string) => {
            return browserUrl === url;
        })
        if (found !== undefined) {
            history.pushState("", "", found);
            return found;
        }
        else {
            return this.redirectToMain();
        }
    }

    public static redirectToMain(): string {
        history.pushState("", "", this.mainPage);
        return this.mainPage;
    }
    public static reloadApplication(currentUrl: string): void {
        document.location.href = currentUrl;
    }

}

export default Routing;
