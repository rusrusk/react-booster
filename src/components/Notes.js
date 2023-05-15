const Notes = (props) => {
	const label = props.note.important
		?	'make not important'
		:	'make important'

	return (
		<li>
			{props.note.content}
			<button onClick={props.toggleHierarchy}>{label}</button>
		</li>
	)
}


export default Notes