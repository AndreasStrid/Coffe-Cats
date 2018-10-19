
import * as React from "react";
const RENDER_PAGE_ERROR = " Route ERROR ";

class Route<P extends IRouteProps> extends React.Component<P> {

    constructor(props: P) {
        super(props)
    }

    public pageRenderer(currentUrl: string): JSX.Element {
        const currentPage = this.props.pages.find((page) => {
            return (page.url === currentUrl);

        });
        if (currentPage !== undefined) {
            return currentPage.component;
        }
        else {
            return <p>{RENDER_PAGE_ERROR}</p>
        }
    }

    public redirect(url: string): void {
        history.pushState("", "", url);
    }


}

export default Route;
