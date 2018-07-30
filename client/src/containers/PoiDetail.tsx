import * as React from 'react';
import {POI} from "../reducers/tour";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {ApplicationState} from "../reducers";
import {updateDetail} from "../actions/detail";
import Image, {ImgSize} from "../components/Image";
import './style/poiDetail.css';
import Header from "../components/Header";

const mapStateToProps = (state: ApplicationState) => ({detail: state.detail});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({updateDetail}, dispatch);

type PoiDetailProps = {
    detail: POI,
    updateDetail: (poiId: number) => (dispatch: Dispatch) => any;
}

class PoiDetail extends React.Component<PoiDetailProps> {

    componentDidMount() {
        this.props.updateDetail(this.props['match']['params']['poi_id']);
    }

    render () {
        const { detail } = this.props;
        return detail ? (
            <div className={'poi-detail'}>
                <Header title={detail.title} />
                <Image image={detail.sm_img} size={ImgSize.LG} />
            </div>
        ) : <div />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoiDetail);