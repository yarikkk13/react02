import {useEffect, useState} from "react";
import Character from "../character/Character";
import {Route, Switch} from "react-router-dom";
import CharacterDetail from "../characterDetails/CharacterDetail";

export default function Characters(props) {

    // console.log(props)
    let {match: {url}} = props;
    // console.log(url)

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value => {
                setCharacters([...value])
            })
    }, []);
    return (
        <div>
            {
                characters.map(value => <Character key={value.id}
                                                   item={value}
                                                    url={url}/>)
            }
            <Switch>
                <Route path={'/characters/:id'} component={CharacterDetail}/>
            </Switch>
        </div>
    );
}
