import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { runClock } from "../../Redux/gameReducer";
import { decreasePersonStats } from "../../Redux/personsReducer";

export default function Clock() {
	const dispatch = useAppDispatch();

	const clock = useSelector((state: RootState) => state.gameState.clock);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(runClock(""));
			dispatch(decreasePersonStats())
		}, 1000);
   		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<>
			{clock.days} Days | {clock.hours} Hours | {clock.minutes} Minutes
		</>
	);
}
