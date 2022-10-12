import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import React from "react";
import './FooterMenu.css'
import Stats from "../Stats/Stats";
import Skills from "../Skills/Skills";

export default function FooterMenu() {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="stats">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="stats">Stats</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="skills">Skills</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="stats">
							<Stats />
						</Tab.Pane>
						<Tab.Pane eventKey="skills">
							<Skills />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}
