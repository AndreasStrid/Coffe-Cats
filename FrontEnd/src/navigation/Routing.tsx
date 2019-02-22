import { URL_ARRAY, URL } from "src/content/Variables"
import StorageKey from "src/types/StorageKey";
import Storage from "src/types/Storage";

class Routing {

    public static browserInput(browserUrl: string): void {

        const found = URL_ARRAY.find((url: string) => {
            return browserUrl === url;
        })
        if (found !== undefined) {
            this.redirect(found);
        }
        else {
            this.redirect(URL.HOME);
        }
    }

    public static reloadBrowser(): void {
        document.location.href = Storage.getItem('reloadBrowser', StorageKey.URL);
    }
    public static getCurrentUrl(): string {
        return Storage.getItem('getCurrentUrl', StorageKey.URL);
    }
    public static redirect(url: string): void {
        history.pushState("", "", url);
        Storage.setItem('redirect', StorageKey.URL, url);
    }
}

export default Routing;
