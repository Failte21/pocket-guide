import * as React from 'react';

export const enum ImgSize {
    SM = 'sm',
    LG = 'lg'
}

const style = {
    sm: {width: "150px"},
    lg: {width: "100%"}
};

type ImageProps = {
    image: string,
    size: ImgSize
}

const Image:React.SFC<ImageProps> = ({image, size}) => (
    image ? <img style={style[size]} src={image} /> : <div style={style[size]}>...Loading image</div>
);

export default Image;