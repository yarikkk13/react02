import {useEffect, useState} from "react";

export default function ThingDetail(props) {
    let {match: {params: {id}}} = props;

    let [thing, setThing] = useState(null);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory/' + id)
            .then(value => value.json())
            .then(value => {
                setThing({...value})
            });
    }, [id])

    return (
        <div>
            {thing &&
            <div>
                <h2>{thing.id} - {thing.title}</h2>
                <p><b>Category :</b> {thing.category}</p>
                <p><b>Description :</b> {thing.description}</p>
                <p><b>Slogan : </b>{thing.slogan}</p>
                <p><b>Price : </b>{thing.price}</p>
                <p><b>Stock : </b>{thing.stock}</p>
            </div>}
        </div>
    );
}
