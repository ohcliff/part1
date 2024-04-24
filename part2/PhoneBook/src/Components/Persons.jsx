


const Persons = ({personsToDisplay}) => {
    return (
        <table>
        <tbody>
          {personsToDisplay.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
        </tbody>
      </table>        
    )
}

export default Persons