import  {useState , useRef} from "react";
import axios from "axios";

function Weather(){
	const [loc ,setLoc] =useState("");
	const [temp ,setTemp] =useState("");
	const  rLoc = useRef();

	const hLoc = (event) =>{
		setLoc(event.target.value);
	}

	const find = (event) => {
		event.preventDefault();

		if(loc == "")
		{
			alert("location is empty");
			setTemp("");
			rLoc.current.focus();
			return;

		}

		let a1 ="https://api.openweathermap.org/data/2.5/weather?";
		let a2 = "q=" + loc;
		let a3 = "&appid=" + "c6e315d09197cec231495138183954bd";
		let a4 = "&units=" + "metric";
		let urladd = a1 + a2 + a3 + a4;
		axios.get(urladd)
		.then(res => setTemp("temp = " + res.data.main.temp))
		.catch(err => setTemp(err.response.data.message));
		}

		return(
			<>
				<center>
					<h1> Weather App  </h1>

					<form onSubmit = {find}>
						<label> Enter Location </label>
					<input type = "text" onChange = {hLoc} ref = {rLoc} />
					<button>Find</button>

					</form>
					<h1>{temp}</h1>
				</center>

		</>
	);


	

}

export default Weather ;