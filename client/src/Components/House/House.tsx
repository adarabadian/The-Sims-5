import React, { useCallback, useRef } from "react";
import "./House.css";
import houseImage from "../../Assets/house.png";
import { useMousePosition } from "../../Utils/CustomHooks";
import furnitureCoordinates from "./FurnitureCoordinates.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Task } from "../../Models/Task";
import { addToTaskQueue } from "../../Redux/personsReducer";

export default function House() {
	const position = useMousePosition();
	const img = useRef(null);
	const dispatch = useDispatch();

	const persons = useSelector(
		(state: RootState) => state.personsState.persons
	);
	const person = persons[persons.map((p) => p.isActive).indexOf(true)];

	interface Coordinates {
		x: number;
		y: number;
	}

	function handleClick(e: any) {
		let coordinates = getCleanCoordinates(e, img, position);
		coordinates = getRelativeCoordinates(img, coordinates);
		let furnitureClicked = whatWasClicked(coordinates);
		furnitureClicked && handleFurnitureClick(furnitureClicked);
	}

	function getCleanCoordinates(e: any, img: any, position: Coordinates) {
		return {
			x: position.x - img.current.offsetLeft,
			y: position.y - img.current.offsetTop,
		};
	}

	function getRelativeCoordinates(img: any, coordinates: Coordinates) {
		return {
			x: Number((coordinates.x / img.current.width).toFixed(3)),
			y: Number((coordinates.y / img.current.height).toFixed(3)),
		};
	}

	function whatWasClicked(coordinates: Coordinates) {
		for (let f of furnitureCoordinates) {
			if (
				coordinates.x >= f.xMin &&
				coordinates.x <= f.xMax &&
				coordinates.y >= f.yMin &&
				coordinates.y <= f.yMax
			) {
				return f.name;
			}
		}
	}

	function handleFurnitureClick(furniture: String) {
		switch (furniture) {
			case "Bed":
				dispatch(addToTaskQueue(new Task('Sleep', "😴")));
				person.queue(() => person.sleep(dispatch));
				break;

			case "Fridge":
				dispatch(addToTaskQueue(new Task("Eat Snack", "🍫")));
				person.queue(() => person.eat(dispatch));
				break;

			case "Oven":
				dispatch(addToTaskQueue(new Task("Cook", "🍳")));
				person.queue(() => person.cook(dispatch));
				person.queue(() => person.eatMeal(dispatch));
				break;

			// case "Computer":
			// 	handleComputerClick();
			// 	break;

			// case "Piano":
			// 	handlePianoClick();
			// 	break;

			// case "Guitar":
			// 	handleGuitarClick();
			// 	break;

			// case "Bath":
			// 	handleBathClick();
			// 	break;

			// case "Toilet":
			// 	handleToiletClick();
			// 	break;

			// case "TV":
			// 	handleTvClick();
			// 	break;

			// case "Bicycle":
			// 	handleBicycleClick();
			// 	break;
		}
	}

	return (
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		// Remove tags from consologs

		<div className="house">
			<img src={houseImage} alt="" ref={img} onClick={handleClick} />
		</div>
	);
}
