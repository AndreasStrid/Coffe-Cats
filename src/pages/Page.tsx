import * as React from "react";
import IPageProps from "./IPageProps";

class Page<T> extends React.Component<IPageProps<T>, {}> {
  constructor(props: IPageProps<T>) {
    super(props);
  }
}

export default Page;
