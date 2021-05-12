import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/userDetails/UserDetails";

export default function App() {
    return (
        <Router>
            <div>
                {/*making links*/}
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/users'}>users</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <br/>

                <Switch>
                    {/*home page*/}
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    {/*users page*/}
                    <Route exact path={'/users'} component={Users}/>

                    {/*замінює повністю юзерс компонент*/}
                    <Route path={'/users/:id'} component={UserDetails}/>


                    {/*posts page */}
                    {/*<Route path={'/posts'} render={(props) => {*/}
                    {/*    console.log(props)*/}
                    {/*    return <Posts/>;*/}
                    {/*}}/>*/}
                    {/*<Route path={'/posts'} render={() => <Posts/>}/>*/}
                    <Route exact path={'/posts'} component={Posts}/>
                </Switch>
            </div>
        </Router>
    );
}
