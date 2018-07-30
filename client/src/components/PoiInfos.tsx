import * as React from 'react';
import "./style/poiInfos.css";

type PoiInfosProps = {
    infos: any;
    triggerInfos: () => any;
}

const PoiInfos:React.SFC<PoiInfosProps> = ({infos, triggerInfos}) => (
    <div
        className={'content poi-infos'}
        dangerouslySetInnerHTML={{__html: infos}}
        onClick={triggerInfos}
    />
);

export default PoiInfos;