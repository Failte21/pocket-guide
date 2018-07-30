import * as React from 'react';
import {POI} from "../reducers/tour";
import Card from "@material-ui/core/Card";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {updateSmImg} from "../actions/poi";
import "./style/poiPreview.css";
import Image from "../components/Image";

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
            <Card className={'poi-preview'}>
                <div className={'poi-section'}>
                    <Image image={poi.sm_img}/>
                </div>
                <div className={'poi-section'}>
                    <h4>{poi.title}</h4>
                    <h5>{poi.subtitle}</h5>
                </div>
            </Card>
        )
    }
}

export default connect(null, mapDispatchToProps)(PoiPreview);