import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Home() {

	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="characters">
				<h2>Characters</h2>
				<div className="card-deck overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{!!store.people && store.people.length > 0 ? store.people.map((character, index) => {
							return (
								<Card
									key={index}
									name={character.name}
									labelText1={"Gender: "}
									labelText2={"Hair Color: "}
									labelText3={"Eye Color: "}
									text1={character.gender}
									text2={character.hair_color}
									text3={character.eye_color}
									id={index}
									section="characters"
								/>
							);
						}) : (<Loading />)}
					</div>
				</div>
			</div>
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
		</div>
	);
}

export default Home;