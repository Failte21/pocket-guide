import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import {updateTour} from "../actions/tour";
import {ApplicationState} from "../reducers";
import {Tour} from "../reducers/tour";

const mapStateToProps = (state: ApplicationState) => ({tour: state.tour});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({updateTour}, dispatch);

class TourList extends React.Component {
    componentDidMount() {
        this.props['updateTour'](this.props['match']['params']['tour_id']);
    }

    render() {
        const tour:Tour = this.props['tour'];
        return (
            <div>
                <h1>{tour.title}</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourList);