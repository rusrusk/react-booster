// import './App.css';

const Header = (props) => {
  return (
    <h1>Name of the course: {props.course}</h1>    
  )
}
const Content = (props) => {
  return (
    <p>{props.parts} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises : {props.total}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {part1: 'Fundamentals of React'},
    {part2: 'Using props to pass data'},
    {part3: 'State of a component'},
  ]
    const exercises = [
    {exercise1: 10},
    {exercise2: 7},
    {exercise3: 14},
  ]
  const total = exercises[0].exercise1 + exercises[1].exercise2 + exercises[2].exercise3
  console.log(total);
  return (
    <>
      <Header course = {course}/>
      <Content parts={parts[0].part1} exercises={exercises[0].exercise1}/>
      <Content parts={parts[1].part2} exercises={exercises[1].exercise2}/>
      <Content parts={parts[2].part3} exercises={exercises[2].exercise3}/>
       
      <Total total={exercises[0].exercise1 + exercises[1].exercise2 + exercises[2].exercise3}/>
    </>
  ); 
}

export default App;
