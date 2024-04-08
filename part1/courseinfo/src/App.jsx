import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.parts[0].content} exercises={props.parts[0].exercises} />
      <Part content={props.parts[1].content} exercises={props.parts[1].exercises} />
      <Part content={props.parts[2].content} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { content: 'Fundamentals of React', exercises: 10 },
    { content: 'Using props to pass data', exercises: 7 },
    { content: 'State of a component', exercises: 14 }
  ];

  let total_exercises = 0;
  for (let i = 0; i < parts.length; i++) {
    total_exercises += parts[i].exercises;
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total_exercises} />
    </div>
  )
}

export default App;

