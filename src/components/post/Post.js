import {Link} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            {item.userId}-{item.id} -{item.title} ->
            <Link to={`${url}/${item.id}`}>post details</Link>
        </div>
    );
}
