import React, { SyntheticEvent } from "react";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import { useSelector } from "react-redux";
import { Task } from "../../Models/Task";
import { RootState } from "../../Redux/store";
import "./TasksQueue.css";

export default function TasksQueue() {
	const persons = useSelector(
		(state: RootState) => state.personsState.persons
	);
	const person = persons[persons.map((p) => p.isActive).indexOf(true)];

	function toggleClass(e: any) {
		if (e._reactName == "onMouseEnter") {
			e.target.innerHTML = "❌";
		} else {
			e.target.innerHTML = e._targetInst.memoizedProps.children;
		}
	}

	return (
		<Tab.Container>
			<Row>
				<Col>
					<Nav variant="pills" className="flex-column">
						{person.tasksQueue.map((task: Task) => (
							<Nav.Item
								key={task.name as any}
								onMouseEnter={toggleClass}
								onMouseLeave={toggleClass}
							>
								<Nav.Link
									active={task == person.tasksQueue[0]}
									eventKey={task.name as any}
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
