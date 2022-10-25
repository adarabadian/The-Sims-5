import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import './Stats.css';

export default function Stats() {
	const persons = useSelector((state: RootState) => state.personsState.persons);
	const person = persons[persons.map((p) => p.isActive).indexOf(true)];

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
		<div>
			<h1>Stats</h1>
			
			<table>
				<tbody>
					<tr>
						<td>
							<label>🍴 Hunger 🍴</label>
						</td>
						<td>{getSlider(person.stats.hunger)}</td>
						<td>
							<label>🚽 Bladder 🚽</label>
						</td>
						<td>{getSlider(person.stats.bladder)}</td>
					</tr>
					<tr>
						<td>
							<label>⚡ Energy ⚡</label>
						</td>
						<td>{getSlider(person.stats.energy)}</td>
						<td>
							<label>🚿 Hygene 🚿</label>
						</td>
						<td>{getSlider(person.stats.hygene)}</td>
					</tr>
					<tr>
						<td>
							<label>🎮 Fun 🎮</label>
						</td>
						<td>{getSlider(person.stats.fun)}</td>

						<td>
							<label>👩🏻‍🤝‍🧑🏽 Social 👩🏻‍🤝‍🧑🏽</label>
						</td>
						<td>{getSlider(person.stats.social)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
