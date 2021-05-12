import {
    Link
} from "react-router-dom";

export default function Post(item, url) {
    return (
        <div>
            {item.id} - {item.body}
            <Link to={url + '/' + item.id}> post details</Link>
        </div>
    );
}
