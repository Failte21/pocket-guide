import * as React from 'react';
import {POI} from "../reducers/tour";
import Card from "@material-ui/core/Card";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {updateSmImg} from "../actions/poi";

type PoiPreviewProps = {
    poi: POI,
    updateSmImg: (poiId: number) => (dispatch:Dispatch) => any
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({updateSmImg}, dispatch);

class PoiPreview extends React.Component<PoiPreviewProps> {

    componentDidMount() {
        this.props.updateSmImg(this.props.poi.idx);
    }

    render() {
        const { poi } = this.props;
        console.log(poi.sm_img);
        return (
            <Card>
                <h4>{poi.title}</h4>
                {/*<img src={`/api/pois/${poi.idx}/image?role=${Roles.SM}`} />*/}
                <img src={poi.sm_img} />
            </Card>
        )
    }
}

export default connect(null, mapDispatchToProps)(PoiPreview);