const PersonForm = (props) => {
	return (
		<form onSubmit={props.addPerson}>
        <div>
          name: 
          <input 
          value={props.newName}
          onChange={props.handleNameChange}/>
        </div>
        <div>
          number:
          <input 
          value={props.newNumber}
          onChange={props.handleNumberChange}
          />
          <button type="submit">
            add
          </button>
        </div>

      </form>
	)
}


export default PersonForm