import {Link} from "react-router-dom";

export default function User({url,item}) {
    return (
        <div>
            {item.name}
            <Link to={`${url}/${item.id}`}> details of user</Link>
        </div>
    );
}
