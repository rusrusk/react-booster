const Total = (props) => {
	const init = 0
	const total = props.total.reduce((accumulator, curr) => accumulator + curr.exercises, init)
	return (
		<div>
			total of {total} exercises
		</div>
	)
}


export default Total