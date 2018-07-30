import * as React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TourList from "./containers/TourList";
import PoiDetail from "./containers/PoiDetail";

class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/tours/:tour_id'} component={TourList}/>
                <Route exact path={'/pois/:poi_id'} component={PoiDetail}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
