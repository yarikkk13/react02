export default function User({item}) {
    return (
        <div>
            <h1> {item.id} - {item.name} - {item.username}</h1>
            <div>
                city - {item.address.city}
                <br/>
                street - {item.address.street}
                <br/>
                zipcode - {item.address.zipcode}

            </div>
        </div>
    );
}
