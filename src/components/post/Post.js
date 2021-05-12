import {
    Link
} from "react-router-dom";

export default function Post(item) {
    return (
        <div>
            {item.item.userId} - {item.item.id}
            <Link to={item.url + '/' + item.item.id}> post details</Link>
        </div>
    );
}
