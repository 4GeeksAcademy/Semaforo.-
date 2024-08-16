import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState(""); 

	const [ luces, setLuces] = useState([ {nombre:"rojo", valor:"red"}, {nombre:"amarillo", valor:"yellow"}, {nombre:"verde", valor:"green"}])

	const toggleColor = () => {
		const currentIndex = luces.findIndex(faro => faro.valor === color);
		const nextIndex = (currentIndex + 1) % luces.length;
		setColor(luces[nextIndex].valor);
	};
		
	
	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-center container mt-5 bg-black " style={{width: 150 , borderRadius: '10%'}}>
				<div className="d-inline-block d-flex flex-column alig-itrms-center">
						
						{
							luces.map(faro=><button className={"d-inline-black rounded-circle m-3 " + (color == faro.valor  ? faro.nombre : "" )} style={{backgroundColor:faro.valor, height: 80, width: 80}} onClick={()=>{setColor(faro.valor)}}></button>)
						}
				</div>
			</div>

			<div className="d-flex justify-content-between align-items-center">
			<button className="btn btn-success" onClick={()=>{
					if(luces.length<=3){								
						setLuces([...luces,{nombre:"morado", valor:"purple"}])
					}
				}}>Agregar</button>

				<button className="btn btn-primary" onClick={toggleColor}>
					Alternar Color
				</button>
			</div>

		</div>
	);
};

export default Home;
