import React from "react";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import { useSelector } from "react-redux";
import { Person } from "../../Models/Person";
import { RootState } from "../../Redux/store";
import "./FooterSimsPicker.css";

export default function FooterSimsPicker() {
	const persons = useSelector(
		(state: RootState) => state.personsState.persons
	);

	return (
		<div className="footer-sims-picker">
			<Tab.Container id="left-tabs-example" defaultActiveKey="stats">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							{persons.map((person: Person) => (
								<Nav.Item key={person.name}>
									<Nav.Link active={person.isActive} eventKey={person.name}>{person.name}</Nav.Link>
								</Nav.Item>
							))}
						</Nav>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}
