// import{
// useParams
// } from "react-router-dom";
import {useEffect, useState} from "react";

export default function UserDetails(props) {

    // let params = useParams();
    let {match: {params: {id}}} = props;

    let [user, setUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value})
            })
    }, [id, user])
    return (
        <div>
            {user && <h2>{user.id} - {user.username} - {user.email}</h2>}
        </div>
    );
}
