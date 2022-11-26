import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Placeholder from "../img/Placeholder.jpg";

const Detail = () => {

	const { store, actions } = useContext(Context);
	const [details, setDetails] = useState("");
	const params = useParams();
	const picture = Number(params.id) + 1;
	const URL_PICTURE = "https://starwars-visualguide.com/assets/img/" + params.section + "/" + picture + ".jpg";
	const ALT_PICTURE = Placeholder

	useEffect(() => {
		if (params.section == "characters") {
			setDetails(store.people[params.id]);
		} else {
			setDetails(store.planets[params.id]);
		}
	}, []);

	if (params.section == "characters") {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<img src={URL_PICTURE} alt="Image" className="imageDetail" />
					<div className="titleDetailDescription">
						<h2>{details.name} </h2>
						<p className="textDetail">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.
						</p>
					</div>
				</div>
				<hr />
				<div className="row dataBelow">
					<div>
						<h5>Name</h5>
						<p>{details.name}</p>
					</div>

					<div>
						<h5>Birth Year</h5>
						<p>{details.birth_year}</p>
					</div>

					<div>
						<h5>Gender</h5>
						<p>{details.gender}</p>
					</div>

					<div>
						<h5>Height</h5>
						<p>{details.height}</p>
					</div>

					<div>
						<h5>Skin Color</h5>
						<p>{details.skin_color}</p>
					</div>

					<div>
						<h5>Eye Color</h5>
						<p>{details.eye_color}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<img src={params.id == 0 ? ALT_PICTURE : URL_PICTURE} alt="photo" className="Image" />
					<div className="titleDetailDescription">
						<h2>{details.name} </h2>
						<p className="textDetail">
							Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.
						</p>
					</div>
				</div>
				<hr />
				<div className="row dataBelow">
					<div>
						<h5>Name</h5>
						<p>{details.name}</p>
					</div>
					<div>
						<h5>Climate</h5>
						<p>{details.climate}</p>
					</div>
					<div>
						<h5>Population</h5>
						<p>{details.population}</p>
					</div>
					<div>
						<h5>Orbital Period</h5>
						<p>{details.orbital_period}</p>
					</div>
					<div>
						<h5>Rotation Period</h5>
						<p>{details.rotation_period}</p>
					</div>
					<div>
						<h5>Diameter</h5>
						<p>{details.diameter}</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Detail;