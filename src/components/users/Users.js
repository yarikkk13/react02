import User from "../user/User";
import {useEffect, useState} from "react";

export default function Users(props) {
    let {match:{url}}=props
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, [])

    return (

        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}
