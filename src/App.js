import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home/Home";
import Characters from "./components/characters/Characters";
import Inventory from "./components/inventory/Inventory";
import ThingDetail from "./components/thingDetail/ThingDetail";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home page</Link>
                <br/>
                <Link to={'/characters'}>characters</Link>
                <br/>
                <Link to={'/inventory'}>inventory</Link>
                <br/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/characters'} component={Characters}/>
                    {/*<Route exact path={'/characters'} component={Characters}/>*/}
                    <Route exact path={'/inventory'} component={Inventory}/>
                    <Route exact path={'/inventory/:id'} component={ThingDetail}/>
                </Switch>
            </div>
        </Router>
    );
}
