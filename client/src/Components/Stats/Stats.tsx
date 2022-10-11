import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch } from "../../Redux/hooks";
import { setPersonStat } from "../../Redux/personReducer";
import { RootState } from "../../Redux/store";
import './Stats.css';

export default function Stats() {
	const person = useSelector((state: RootState) => state.personState.person);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// eat();
	}, []);
	
	async function eat() {
		for (let i = 0; i < 3; i++) { 
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch(setPersonStat(["hunger", person.stats.hunger + 5]));
		}
		console.log(person);
	}

	function getSlider(precentage : number){
		if (precentage > 50) {
			return <ProgressBar animated now={precentage} variant="success" />;
		} 
		if (precentage > 25){
			return <ProgressBar animated now={precentage} variant="warning" />;
		}
		return <ProgressBar animated now={precentage} variant="danger" />;
	}

	return (
		<table>
			<tbody>
				<tr>
					<td>
						<label>Hunger</label>
					</td>
					<td>
						{getSlider(person.stats.hunger)}
					</td>
					<td>
						<label>Bladder</label>
					</td>
					<td>
						{getSlider(person.stats.bladder)}
					</td>
				</tr>
				<tr>
					<td>
						<label>Energy</label>
					</td>
					<td>
						{getSlider(person.stats.energy)}
					</td>
					<td>
						<label>Hygene</label>
					</td>
					<td>{getSlider(person.stats.hygene)}</td>
				</tr>
				<tr>
					<td>
						<label>Fun</label>
					</td>
					<td>{getSlider(person.stats.fun)}</td>

					<td>
						<label>Social</label>
					</td>
					<td>{getSlider(person.stats.social)}</td>
				</tr>
			</tbody>
		</table>
	);
}
