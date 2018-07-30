import * as React from 'react';

const style = {width: "150px", height: "150px"};

type ImageProps = {
    image: string
}

const Image:React.SFC<ImageProps> = ({image}) => (
    image ? <img style={style} src={image} /> : <div style={style}>...</div>
);

export default Image;