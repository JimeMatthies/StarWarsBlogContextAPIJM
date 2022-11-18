import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";

const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="characters">
            <h2>Characters</h2>
            <div className="card-deck overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.people.map((character, index) => {
                        return (
                            <Card
                                key={index}
                                name={character.name}
                                labelText1={"Gender: "}
                                labelText2={"Eye Color: "}
                                labelText3={"Hair Color: "}
                                text1={character.gender}
                                text2={character.eye_color}
                                text3={character.hair_color}
                                id={index}
                                section="character"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Characters;