import {Link} from "react-router-dom";

export default function Character(item) {
    // console.log(item)
    return (
        <div>
            {item.item.id} ->
            <Link to={item.url+'/'+item.item.id}>character details</Link>
        </div>
    );
}
