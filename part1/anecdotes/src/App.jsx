import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const DisplayQuote = (props) => (
  <div>
    <p>{props.quote}</p>
  </div>
);
const DisplayMostVotes = (props) => {
  const maxVotes = Math.max(...props.votesArray)
  const index = props.votesArray.indexOf(maxVotes)
  if (maxVotes === 0) {
    return null
  }
  return (
    <div>
      <DisplayQuote quote={props.anecdotes[index]} />
      <DisplayVotes numberVotes={maxVotes}/>
    </div>
  )
}
const DisplayVotes = (props) => (
  <div>
    <p>has {props.numberVotes} votes</p>
  </div>
);
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [votesArray, setVotesArray] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const handleQuote = () => {
    const index = getRandomInt(0, anecdotes.length - 1);
    setSelected(index);
  };

  const handleVotes = () => {
    const newVotesArray = [...votesArray];
    newVotesArray[selected] += 1;
    setVotesArray(newVotesArray);
  };

  return (
    <div>
      <Header title='Anecdote of the day' />
      <DisplayQuote quote={anecdotes[selected]} />
      <DisplayVotes numberVotes={votesArray[selected]} />
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleQuote} text='next anecdote' />
      <Header title='Anecdote with the most votes' />
      <DisplayMostVotes anecdotes={anecdotes} votesArray={votesArray}/>
    </div>
  );
};

export default App;
