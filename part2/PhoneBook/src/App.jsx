  import { useState,useEffect } from 'react'
  import axios from 'axios'
  import Filter from './Components/Filter'
  import PersonForm from './Components/PersonForm'
  import Persons from './Components/Persons'


  const App = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3002/persons')
      .then(response => {console.log('promise fulfilled')
      setPersons(response.data)})
    }, [])

    const [newName, setNewName] = useState('')
    const handleNewName = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }

    const [newNumber, setNewNumber] = useState('')
    const handleNewNumber = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
      event.preventDefault()
      const duplicate = persons.some(person => person.name === newName);
      if (duplicate) {
        alert(`${newName} is already added to phonebook`)
        return
      }
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }


    const [newSearch, setNewSearch] = useState('')
    const [filteredPersons, setFilter] = useState([])
    const handleNewSearch = (event) => {
      const searchTarget = event.target.value.toLowerCase();
      setNewSearch(searchTarget);
      const filtered = persons.filter(person => person.name.toLowerCase().includes(searchTarget))
      setFilter(filtered)
    }
    const personsToDisplay = newSearch === '' ? persons : filteredPersons;


    return (
      <div>
        <h2>Phonebook</h2>

        <Filter 
          newSearch={newSearch} 
          handleNewSearch={handleNewSearch}
        />

        <h2>Add a new</h2>

        <PersonForm 
          addPerson={addPerson}
          newName={newName}
          handleNewName={handleNewName}
          newNumber={newNumber}
          handleNewNumber={handleNewNumber}
        />
        
        <h2>Numbers</h2>

        <Persons 
          personsToDisplay={personsToDisplay} 
        />
      </div>
    )
  }

  export default App