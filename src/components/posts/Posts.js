import {useEffect, useState} from "react";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";

export default function Posts(props) {
    let {match: {url}} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            });
    }, []);


    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value} url={url}/>)
            }

            <Switch>
                <Route path={'/posts/1'} component={PostDetails}/>
            </Switch>
        </div>
    );
}
