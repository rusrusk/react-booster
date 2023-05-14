import {useState} from 'react'

const Button = (props) => {

  return (
      <button onClick={props.clickHandler}> {props.text}</button>
  )
}


const MostVotes = ({votes, anecdotes}) => {
  // const [votes, anecdotes] = props
  const largestVote = Math.max(...votes)
  const anecdoteIndex = votes.indexOf(largestVote)
  const topAnecdote = anecdotes[anecdoteIndex]
  return (
    <div>
    <div>{topAnecdote}</div>
    <div>has {largestVote} votes</div>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const selectRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length)) 
  const handleVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <div>
        <Button text="votes" clickHandler={handleVotes}/>
        <Button text="next anecdote" clickHandler={selectRandom}/>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <MostVotes votes={votes} anecdotes={anecdotes}/>
      </div>
    </div>
  )
}

export default App