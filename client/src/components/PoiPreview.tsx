import * as React from 'react';
import {POI} from "../reducers/tour";
import Card from "@material-ui/core/Card";

type PoiPreviewProps = {
    poi: POI
}

const PoiPreview:React.SFC<PoiPreviewProps> = ({poi}) => (
    <Card>
        <h4>{poi.title}</h4>
    </Card>
);

export default PoiPreview;