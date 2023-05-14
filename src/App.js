// import './App.css';

const Header = (props) => {
  return (
    <h1>Name of the course: {props.course}</h1>    
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.parts[0].part1} exercise={props.exercises[0].exercise1} />
    <Part part={props.parts[1].part2} exercise={props.exercises[1].exercise2}/>
    <Part part={props.parts[2].part3} exercise={props.exercises[2].exercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises : {props.exercises[0].exercise1 + props.exercises[1].exercise2 + props.exercises[2].exercise3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {part1: 'Fundamentals of React'},
      {part2: 'Using props to pass data'},
      {part3: 'State of a component'},
    ],
    exercises: [
      {exercise1: 10},
      {exercise2: 7},
      {exercise3: 14},
    ]
  }


  

  return (
    <>
      <Header course = {course.name} />
      <Content parts={course.parts} exercises={course.exercises} />
      <Total exercises={course.exercises}/>
    </>
  ); 
}

export default App;
