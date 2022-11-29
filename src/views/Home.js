import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Home() {

	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

    const searcher = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    let searchresult = {};
	if(!search) {
		searchresult = store;
	} else {
		searchresult = store.filter((data) =>
			data.name.toLowerCase().includes(search.toLowerCase())
		)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-5 text-white">
					<input className="form-control" type="text" placeholder="Search" value={search} onChange={searcher} />
				</div>
			</div>
			<div className="characters container-fluid p-0 mb-4">
				<h2>Characters</h2>
				<div className="card-deck">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresult.people && searchresult.people.length > 0 ? searchresult.people.map((character, index) => {
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
						{!!searchresult.planets && searchresult.planets.length > 0 ? searchresult.planets.map((planets, index) => {
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