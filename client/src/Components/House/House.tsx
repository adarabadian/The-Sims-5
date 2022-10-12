import React, { useRef } from 'react'
import './House.css'
import houseImage from '../../Assets/house.png'
import { useMousePosition } from '../../Utils/CustomHooks';

export default function House() {

	const position = useMousePosition();
  	const img = useRef();

	function handleClick(e : any){
		let coordinates = getCleanCoordinates(e, img, position);
		
		console.log(img);
		
	}

	function getCleanCoordinates (e : any, img : any, position : any){
		let y = position.y - img.current.offsetTop;
		let x = position.x - img.current.offsetLeft

		return {
			x : x,
			y : y
		}

	}

  	return (
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		// HOUSE LINK https://planner5d.com/v?key=9412f97df46b4e6364a5ba74345aa43b&viewMode=2d
		<div className="house">
			<img src={houseImage} alt="" ref={img} onClick={handleClick} />
		</div>
	);
}
