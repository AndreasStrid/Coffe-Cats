interface IPage {

  RENDER_PAGE_ERROR: "Couldn't render this page";

  pageRenderer(pageSelected: string): JSX.Element;

  redirect(pageName: string, url: string): void;
}

export default IPage;
