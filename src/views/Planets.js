import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="planets">
            <h2>Planets</h2>
            <div className="card-deck overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {!!store.planets && store.planets.length > 0 ? store.planets.map((planets, index) => {
                        return (
                            <Card
                                key={index}
                                name={planets.name}
                                labelText1={"Population: "}
                                labelText2={"Terrain: "}
                                text1={planets.population}
                                text2={planets.terrain}
                                id={index}
                                section="planets"
                            />
                        );
                    }) : (<Loading />)}
                </div>
            </div>
        </div>
    );
}

export default Planets;