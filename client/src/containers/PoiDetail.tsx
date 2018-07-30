import * as React from 'react';
import {POI} from "../reducers/tour";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {ApplicationState} from "../reducers";
import {updateDetail} from "../actions/detail";
import Image, {ImgSize} from "../components/Image";
import './style/poiDetail.css';
import Header from "../components/Header";
import PoiInfos from "../components/PoiInfos";

const mapStateToProps = (state: ApplicationState) => ({detail: state.detail});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({updateDetail}, dispatch);

type PoiDetailProps = {
    detail: POI,
    updateDetail: (poiId: number) => (dispatch: Dispatch) => any;
}

class PoiDetail extends React.Component<PoiDetailProps> {

    state = {
        hasInfoOpen: false
    };

    triggerInfos = () => this.setState({hasInfoOpen: !this.state.hasInfoOpen});

    componentDidMount() {
        this.props.updateDetail(this.props['match']['params']['poi_id']);
    }

    render () {
        const { detail } = this.props;
        return detail ? (
            <div>
                <Header title={detail.title} />
                <div className={'content poi-detail'}>
                    <Image image={detail.sm_img} size={ImgSize.LG} triggerInfos={this.triggerInfos}/>
                    <p style={{padding: "5px"}}>
                        {detail.short_text}
                    </p>
                </div>
                {this.state.hasInfoOpen && <PoiInfos infos={detail.long_text} triggerInfos={this.triggerInfos}/>}
            </div>
        ) : <div />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoiDetail);