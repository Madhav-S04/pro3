import { useState } from 'react';

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

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const getTopAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const topAnecdoteIndex = votes.indexOf(maxVotes);
    return { anecdote: anecdotes[topAnecdoteIndex], votes: maxVotes };
  };

  const topAnecdote = getTopAnecdote();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} vote{votes[selected] !== 1 ? 's' : ''}</p>
      <button onClick={handleVote} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}>
        Vote
      </button>
      <button onClick={handleRandomAnecdote} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Show Random Anecdote
      </button>

      <div style={{ marginTop: '30px' }}>
        <h2>Anecdote with most votes</h2>
        <p>{topAnecdote.anecdote}</p>
        <p>Has {topAnecdote.votes} vote{topAnecdote.votes !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default App;
