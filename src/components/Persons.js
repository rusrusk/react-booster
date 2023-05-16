const Persons = (props) => {

  const label = "delete"  

	return (
		<ul>
        {props.searchedWord
        
          ? props.filter.map(person => (
            <li
              key={person.id}>  {person.name} {person.number} 
            </li>))
          : props.persons.map(person => (
            <li
              key={person.id}>  {person.name} {person.number}         
              <button onClick={() => props.deleteOrNot(person.id)}>{label}</button>
            </li>))
        }
      </ul>
	)
}


export default Persons