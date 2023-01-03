function result(n)
{

	return(
		<>
			<center>
				<h1> { n.title } </h1>
				<h2> < a href = {n.url}> Read More </a> </h2>
				<img src = {n.urlToImage} alt ="" width ="400" height = "400" />

				<hr/><hr/>
				</center>
		</>
	);
  }

export default result