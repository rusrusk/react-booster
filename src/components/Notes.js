import './index.css'

const Notes = (props) => {
	return (
		<li className='note'>{props.note.content}</li>
	)
}


export default Notes