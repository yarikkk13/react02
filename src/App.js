import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/userDetails/UserDetails";
import PostDetails from "./components/postDetails/PostDetails";

export default function App() {

    return (
        <Router>
            <div>
                <Link to={'/'}>home page</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>

                <Switch>
                    <Route exact path={'/'} ><Home/></Route>
                    <Route exact path={'/users'} component={Users}/>
                    <Route exact path={'/users/:id'} component={UserDetails}/>
                    <Route exact path={'/posts'} component={Posts}/>
                    <Route exact path={'/posts/:id'} component={PostDetails}/>
                </Switch>
            </div>
        </Router>
    );
}
