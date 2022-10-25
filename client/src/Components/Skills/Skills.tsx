import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Redux/hooks";
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
						<td>{getSlider(person.skills.charisma.level)}</td>
						<td>
							<label>🍳 Cooking 🍳</label>
						</td>
						<td>{getSlider(person.skills.cooking.level)}</td>
					</tr>
					<tr>
						<td>
							<label>🎨 Arts 🎨</label>
						</td>
						<td>{getSlider(person.skills.arts.level)}</td>
						<td>
							<label>🏃‍♂️ Fitness 🏃‍♂️</label>
						</td>
						<td>{getSlider(person.skills.fitness.level)}</td>
					</tr>
					<tr>
						<td>
							<label>♟ Logic ♟</label>
						</td>
						<td>{getSlider(person.skills.logic.level)}</td>

						{/* <td>
							<label>🎸 Playing 🎸</label>
						</td>
						<td>{getSlider(person.skills.playing)}</td> */}
					</tr>
				</tbody>
			</table>
		</div>
	);
}
