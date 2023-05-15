
const Filter = (props) => {

	return (
		<div>
			filter shown with:
			<input
		  		value={props.searchedWord}
		  		onChange={props.handleSearchedWordChange}/>
	  	</div>
	)
}


export default Filter