import * as React from "react";
import H1PImage from "../../components/h1PImage/H1PImage";
import IH1PImageProps from "../../components/h1PImage/IH1PImageProps";
import IPageProps from "../IPageProps";
import Page from "../Page";
import "./HomPageStyle.css";
import IHomePageProps from "./IHomePageProps";

class HomePage extends Page<IHomePageProps> {
  constructor(props: IPageProps<IHomePageProps>) {
    super(props);
  }
  public render() {
    return (
      <div className="homePage">
        <div className="topArea">
          <h1> All your need is </h1>
        </div>
        {this.createHomePageComponents(this.props.child.H1PImageList)}
      </div>
    );
  }
  public createHomePageComponents(
    components: IH1PImageProps[]
  ): JSX.Element {
    const H1PImageElements = components.map(
      (component: IH1PImageProps) => {
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
