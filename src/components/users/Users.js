import {useEffect, useState} from "react";
import User from "../user/User";
// import UserDetails from "../userDetails/UserDetails";
// import {Route, Switch} from "react-router-dom";
//3,4, 27-31
export default function Users(props) {
    //витягуєм урл
    console.log(props)
    let {match: {url}} = props;


    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                // console.log(value)
            });
    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }
            {/*<Switch>*/}
                {/*/users/1*/}
                {/*/users/2*/}
                {/*/users/3*/}
                {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            {/*</Switch>*/}
        </div>
    );
}
