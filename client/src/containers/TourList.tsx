import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import {updateTour} from "../actions/tour";
import {ApplicationState} from "../reducers";
import {Tour} from "../reducers/tour";
import Header from "../components/Header";
import PoiPreview from "./PoiPreview";

type HeaderProps = {
    tour: Tour,
    updateTour: (tourId:string) => any;
}

const mapStateToProps = (state: ApplicationState) => ({tour: state.tour});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({updateTour}, dispatch);

class TourList extends React.Component<HeaderProps> {
    componentDidMount() {
        this.props.updateTour(this.props['match']['params']['tour_id']);
    }

    render() {
        const { tour } = this.props;
        return (
            <div>
                <Header title='List' />
                <h3>{tour.title}</h3>
                {tour.pois.map(poi => <PoiPreview poi={poi} key={poi.idx}/>)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourList);