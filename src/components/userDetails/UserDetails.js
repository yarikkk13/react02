import {useEffect, useState} from "react";

export default function UserDetails(props) {
    let {match: {params: {id}}} = props;

    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser(value)
            })
    }, [id])
    return (


        <div>
            {
                user&&
                <div>
                   <h2>{user.id} - {user.username}</h2>
                    <p>{user.email}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.street}</p>
                    <p>{user.phone}</p>
                </div>
            }
        </div>
    );
}
