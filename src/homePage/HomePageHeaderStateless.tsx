import * as React from 'react';

interface IProps {
    name?: string;
}

const HomePageHeaderStateless: React.SFC<IProps> = (props: IProps) => (
    <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
);

HomePageHeaderStateless.defaultProps = {
    name: 'world',
};

export default HomePageHeaderStateless;
