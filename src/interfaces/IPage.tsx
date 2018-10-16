interface IPage {
  pageRenderer(pageSelected: string): JSX.Element;

  redirect(pageName: string, url: string): void;
}

export default IPage;
