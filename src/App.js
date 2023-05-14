import {useState} from 'react'

const Display = (props) => {

  return (
    <div>{props.text}</div>
  )
}

const Button = (props) => {
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const average = 1.0 * (total / 3)
    const positive = (props.good/total) * 100 + "%"
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
      <StatisticsLine text={"Good "} value={props.good} />
      <StatisticsLine text={"Neutral "} value={props.neutral} />
      <StatisticsLine text={"Bad "} value={props.bad} />
      <StatisticsLine text={"All "} value={total} />
      <StatisticsLine text={"Average "} value={average} />
      <StatisticsLine text={"Positive "} value={positive} />
      </div>
    )
  }
  else {
    return <p>No feedback given</p>
  }
  
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <>
      <h1><Display text="give feedback"/></h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h1><Display text="statistics"/></h1>
      <div>
        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p> */}
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>

    </>
  ) 
}


export default App