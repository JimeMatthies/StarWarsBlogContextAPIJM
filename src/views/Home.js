import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Home() {

	const { store, actions } = useContext(Context);
	const [searchpeople, setSearchpeople] = useState("");
	const [searchplanet, setSearchplanet] = useState("");

	const searcherpeople = (event) => {
		setSearchpeople(event.target.value)
		console.log(event.target.value)
	}

	const searcherplanet = (event) => {
		setSearchplanet(event.target.value)
		console.log(event.target.value)
	}

	let searchresultpeople = {};
	if (!searchpeople) {
		searchresultpeople = store.people;
	} else {
		searchresultpeople = store.people.filter((data) =>
			data.name.toLowerCase().includes(searchpeople.toLowerCase())
		)
	}

	let searchresultplanet = {};
	if (!searchplanet) {
		searchresultplanet = store.planets;
	} else {
		searchresultplanet = store.planets.filter((data) =>
			data.name.toLowerCase().includes(searchplanet.toLowerCase())
		)
	}

	return (
		<div className="container">
			<div className="row">
				<h2 className="col-4"><Link to="/characters">Characters :</Link></h2>
				<div className="col-md-3 text-white">
					<input className="input" type="text" placeholder="Search Character" value={searchpeople} onChange={searcherpeople} />
				</div>
			</div>
			<div className="characters container-fluid p-0 mb-4">
				<div className="card-deck">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresultpeople && searchresultpeople.length > 0 ? searchresultpeople.map((character, index) => {
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
			<div className="row">
				<h2 className="col-4"><Link to="/planets">Planets :</Link></h2>
				<div className="col-md-3 text-white">
					<input className="input" type="text" placeholder="Search Planet" value={searchplanet} onChange={searcherplanet} />
				</div>
			</div>
			<div className="planets container-fluid p-0 mb-4">
				<div className="card-deck overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresultplanet && searchresultplanet.length > 0 ? searchresultplanet.map((planets, index) => {
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