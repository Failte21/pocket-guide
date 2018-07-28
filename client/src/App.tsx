import * as React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TourList from "./containers/TourList";

class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/tours/:tour_id'} component={TourList}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
