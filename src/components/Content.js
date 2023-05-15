import Parts from "./Parts";

const Content = (props) => {
	console.log("props.parts : ", props.parts);
	return (
		<div>
			<ul>
				{props.parts.map(part => <Parts key={part.id} part={part} />)}
			</ul>
		</div>
	)
}


export default Content