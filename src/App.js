import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedWord, setSearchedWord] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const addPerson = e => {
    e.preventDefault()
    if (persons.findIndex((p) => p.name === newName) !== -1) {
      alert(newName + ' was already added to the array')
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
      
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = e => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    console.log(e.target.value);
    setNewNumber(e.target.value)
  }

  const handleSearchedWordChange = e => {
    setSearchedWord(e.target.value.toLowerCase())
  }

  const filter = persons.filter(person =>
    person.name.toLowerCase().includes(searchedWord))

  return (
    <>
      <h2>Phonebook</h2>
      <Filter 
        searchedWord={searchedWord}
        handleSearchedWordChange={handleSearchedWordChange}
      />
        <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons searchedWord={searchedWord} filter={filter} persons={persons}/>
    </>
  )
}

export default App


