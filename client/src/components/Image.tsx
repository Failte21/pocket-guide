import * as React from 'react';
import Button from "@material-ui/core/Button";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import "./style/image.css";

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
    size: ImgSize,
    triggerInfos?: () => any
}

const Image:React.SFC<ImageProps> = ({image, size, triggerInfos}) => (
    image ?
        <div className={'img-container'}>
            <img style={style[size]} src={image} />
            {triggerInfos &&
            <Button variant={"fab"} onClick={triggerInfos} className={'info-button'}>
                <SpeakerNotesIcon />
            </Button>}
        </div> :
        <div style={style[size]}>...Loading image</div>
);

export default Image;