import {Link} from "react-router-dom";

export default function Thing(item) {
    // console.log(item)
    return (
        <div>
            {item.item.id} - {item.item.title} ->
            <Link to={item.url+'/' + item.item.id}>thing details</Link>
        </div>
    );
}
