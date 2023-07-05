import React, { useEffect, useState } from "react";

const PokemonImage = ({ url }) => {
    const [imgUrl, setImgUrl] = useState('');
    const [ability, setAbility] = useState('');

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setImgUrl(data?.sprites?.other?.dream_world?.front_default)
                setAbility(data?.types)
            })
            .catch(error => console.log(error));
    }, [url])

    if (!imgUrl) return <h1>...Loading</h1>
    return (
        <div className="ability-container">
            <img src={imgUrl} />
            <div className="ability">
                {ability.map((res) =>
                    <p key={res.type.slot}>{res.type.name}</p>
                )}
            </div>
        </div>
    )
}

export default PokemonImage;