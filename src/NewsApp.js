import  {useState , useRef} from "react";
import axios from "axios";
import Result from './Result'


function News(){
	const [news , setNews] = useState([]);

	const find = (event) => {
		event.preventDefault(); 
		let a1 = "https://newsapi.org/v2/top-headlines";
		let a2 ="?country=" + "in";
		let a3 = "&apiKey=" + "dcf42dec7d614e778d3dcd8616ab8182";
		let urladd = a1 + a2 + a3;
		axios.get(urladd)
		.then(res  => {
		console.log(res.data)
		setNews(res.data.articles)
		})
		.catch( err => console.error(err))

		
}
	return(
			<>
				<center>
					<h1> Top Headlines From India </h1>

					<form onSubmit = {find}>
						
						<input type = "submit" value ="Get the news" />

					</form>
					
				</center>
				{
					news.map((n) => (
						<div>
							<Result title = {n.title} url = {n.url} urlToImage = {n.urlToImage} />
						</div>
					))
			}
		</>
	);
}



export default News;