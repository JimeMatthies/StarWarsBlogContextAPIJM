import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detail = () => {

	const { store, actions } = useContext(Context);
	const params = useParams();
	const [DataInfo, setDataInfo] = useState("");

	useEffect(() => {
		if (params.section == "character") {
			setDataInfo(store.people[params.id]);
			console.log(DataInfo, "del if");
		} else {
			setDataInfo(store.planets[params.id]);
			console.log(DataInfo, "del else");
		}
	}, []);
    
	if (params.section == "character") {
		return (
			<div>
				<div className="row justify-content-center imgAndTitleDecription">
					<img src="https://dummyimage.com/800x600/000/fff" alt="photo" className="imageDetail" />
					<div className="titleDetailDescription">
						<h2>{DataInfo.name} </h2>
						<p className="textDetail">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<hr />
				<div className="row dataBelow">
					<div>
						<h5>Name</h5>
						<p>{DataInfo.name}</p>
					</div>

					<div>
						<h5>Birth Year</h5>
						<p>{DataInfo.birth_year}</p>
					</div>

					<div>
						<h5>Gender</h5>
						<p>{DataInfo.gender}</p>
					</div>

					<div>
						<h5>Height</h5>
						<p>{DataInfo.height}</p>
					</div>

					<div>
						<h5>Skin Color</h5>
						<p>{DataInfo.skin_color}</p>
					</div>

					<div>
						<h5>Eye Color</h5>
						<p>{DataInfo.eye_color}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div className="row justify-content-center imgAndTitleDecription">
					<img src="https://dummyimage.com/800x600/000/fff" alt="photo" className="imageDetail" />
					<div className="titleDetailDescription">
						<h2>{DataInfo.name} </h2>
						<p className="textDetail">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<hr />
				<div className="row dataBelow">
					<div>
						<h5>Name</h5>
						<p>{DataInfo.name}</p>
					</div>
					<div>
						<h5>Climate</h5>
						<p>{DataInfo.climate}</p>
					</div>
					<div>
						<h5>Population</h5>
						<p>{DataInfo.population}</p>
					</div>
					<div>
						<h5>Orbital Period</h5>
						<p>{DataInfo.orbital_period}</p>
					</div>
					<div>
						<h5>Rotation Period</h5>
						<p>{DataInfo.rotation_period}</p>
					</div>
					<div>
						<h5>Diameter</h5>
						<p>{DataInfo.diameter}</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Detail;