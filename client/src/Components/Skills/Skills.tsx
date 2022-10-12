import React, { useEffect } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Redux/hooks";
import { setPersonStat } from "../../Redux/personsReducer";
import { RootState } from "../../Redux/store";

export default function Skills() {
	const persons = useSelector(
		(state: RootState) => state.personsState.persons
	);
	const person = persons[persons.map((p) => p.isActive).indexOf(true)];

	const dispatch = useAppDispatch();

	useEffect(() => {
		// eat();
	}, []);

	function getSlider(level: number) {
		let htmlResult = '';

		for (let i = 1; i < 11; i++){
			if (i <= level){
				htmlResult += '🟢';
			} else{
				htmlResult += '🔴';
			}
		}
		return htmlResult;
	}

	return (
		<div>
			<h1>Stats</h1>

			<table>
				<tbody>
					<tr>
						<td>
							<label>🤵 Charisma 🤵</label>
						</td>
						<td>{getSlider(person.skills.charisma)}</td>
						<td>
							<label>🍳 Cooking 🍳</label>
						</td>
						<td>{getSlider(person.skills.cooking)}</td>
					</tr>
					<tr>
						<td>
							<label>🎨 Drawing 🎨</label>
						</td>
						<td>{getSlider(person.skills.drawing)}</td>
						<td>
							<label>🏃‍♂️ Fitness 🏃‍♂️</label>
						</td>
						<td>{getSlider(person.skills.fitness)}</td>
					</tr>
					<tr>
						<td>
							<label>♟ Logic ♟</label>
						</td>
						<td>{getSlider(person.skills.logic)}</td>

						<td>
							<label>🎸 Playing 🎸</label>
						</td>
						<td>{getSlider(person.skills.playing)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
