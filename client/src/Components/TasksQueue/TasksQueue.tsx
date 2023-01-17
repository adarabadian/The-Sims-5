import React from "react";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import { useSelector } from "react-redux";
import { Task } from "../../Models/Task";
import { useAppDispatch } from "../../Redux/hooks";
import { updatePersonTasks } from "../../Redux/personsReducer";
import { RootState } from "../../Redux/store";
import "./TasksQueue.css";

export default function TasksQueue() {
	const dispatch = useAppDispatch();
	const persons = useSelector(
		(state: RootState) => state.personsState.persons
	);
	const tasks =
		persons[persons.map((p) => p.isActive).indexOf(true)].tasksQueue;

	function toggleClass(e: any) {
		if (e._reactName == "onMouseEnter") {
			e.target.innerHTML = "❌";
		} else {
			e.target.innerHTML = e._targetInst.memoizedProps.children;
		}
	}

	function cancelTask(key: string) {
		let taskIndex = getClickedTask(key);
		let tasksCopy = [...tasks];
		tasksCopy.splice(taskIndex, 1);
		dispatch(updatePersonTasks(tasksCopy));
	}

	function getClickedTask(key: string) {
		return tasks.findIndex((task: Task) => {
			return task.key === key;
		});
	}

	return (
		<Tab.Container>
			<Row>
				<Col>
					<Nav variant="pills" className="flex-column">
						{tasks.map((task: Task) => (
							<Nav.Item
								onClick={() => cancelTask(task.key)}
								key={task.key}
								onMouseEnter={toggleClass}
								onMouseLeave={toggleClass}
							>
								<Nav.Link
									key={task.key}
									active={task == tasks[0]}
								>
									{task.icon +
										" " +
										task.name +
										" " +
										task.icon}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Col>
			</Row>
		</Tab.Container>
	);
}
