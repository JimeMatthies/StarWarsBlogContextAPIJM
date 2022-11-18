import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from "prop-types";

function Card (props) {

	const { store, actions } = useContext(Context);
/* 	const [selected, setSelected] = useState(<FaHeart />); */

	return (
		<div>
			<div className="card">
				<img
					src="https://dummyimage.com/400x200/ffe91f/000000.png"
					className="card-img-top"
					alt="Image 400x200"
					style={{ width: "400px" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.labelText1} {props.text1}
					</p>

					<p className="card-text">
						{props.labelText2} {props.text2}
					</p>
					<p className="card-text">
						{props.labelText3} {props.text3}
					</p>
					<div className="downButtons">
						<Link to={"/" + props.section + "/" + props.id} className="btn btn-outline-primary">
							View more!
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning"
							id="heart"
							onClick={() => {
								actions.addFavorite(props.name);
							}}>
							{store.favorite.includes(props.name) ? (<FaHeart />) : (<FaRegHeart />)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	id: PropTypes.number,
	section: PropTypes.string
};

export default Card;
