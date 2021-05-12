import {useEffect, useState} from "react";


export default function PostDetails(props) {
    let {match: {params: {id}}} = props;
    console.log(props)
    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value})
            })
    }, [id, post])
    return (
        <div>
            {post && <h2> {post.body} </h2>}
        </div>
    );
}
