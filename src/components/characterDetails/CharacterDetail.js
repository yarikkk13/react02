import {useEffect, useState} from "react";

export default function CharacterDetail(props) {
    // console.log(props)
    let {match: {params: {id}}} = props;
    // console.log(id)

    let [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters/' + id)
            .then(value => value.json())
            .then(value => {
                setCharacter({...value})
            });
    }, [id]);
    return (
        <div>

            {character &&
            <div>
                <h2>{character.id}</h2>
                <p>{character.name.first} {character.name.middle} {character.name.last}</p>
                <p>{character.age}</p>
                <p>{character.gender}</p>
                <p>{character.species}</p>
                <p>{character.homePlanet}</p>
                <p>{character.occupation}</p>
            </div>
            }

        </div>
    );
}
