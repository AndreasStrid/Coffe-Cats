import * as React from "react";
import H1PImage from "./h1PImage/H1PImage";
import "./HomPageStyle.css";

class HomePage extends React.Component<IHomePageProps> {
  constructor(props: IHomePageProps) {
    super(props);
  }
  public render() {
    return (
      <div className="homePage">
        <div className="topArea">
          <h1> All your need is </h1>
        </div>
        {this.createHomePageComponents(this.props.H1PImageList)}
      </div>
    );
  }
  public createHomePageComponents(
    components: IH1P1ImageProps[]
  ): JSX.Element {
    const H1PImageElements = components.map(
      (component: IH1P1ImageProps) => {
        return (
          <H1PImage
            h1={component.h1}
            p={component.p}
            img={component.img}
            key={component.h1}
          />
        );
      }
    );

    return <ul> {H1PImageElements} </ul>;
  }
}
// key={component.h1}

export default HomePage;
