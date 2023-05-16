import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import PersonService from './services/persons'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedWord, setSearchedWord] = useState('')

  useEffect(() => {
      PersonService
      .getAllPeople()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const addPerson = e => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1
    }
    const filteredPersons = persons.filter(p => p.name === personObject.name)
    if (persons.findIndex((p) => p.name === newName) !== -1) {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`))
      {
        PersonService
        .updatePerson(personObject, filteredPersons[0].id)
        .then(updatedPerson => {
          setPersons(persons.map(person => {
            if (person.name === updatedPerson.name)
              return updatedPerson
            else
              return person
          }))
          
        })
      }  
      setNewName('') 
      setNewNumber('') 
    }
    else {
      PersonService
      .createPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
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


  const deleteOrNot = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      PersonService
        .deletePerson(id)
        setPersons(persons.filter(p => p.id !== id))
    } 
  }

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
      <Persons
        searchedWord={searchedWord} 
        persons={persons}
        filter={filter}
        deleteOrNot={deleteOrNot}
        />
    </>
  )
}

export default App


