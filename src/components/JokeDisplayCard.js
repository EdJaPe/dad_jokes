import { useState } from 'react';

const JokeDisplayCard = ({question, answer}) => {
   const [flip, setFlip] = useState(false)

  


  return(
    
      <div 
      className={`jokeCard ${flip ? 'is-flipped':''}`}
      onClick={() => setFlip(!flip)} 
      >
        <div className="card--front">
          <h3>{question}</h3>
        </div>
        <div className="card--back">
          <h3>{answer}</h3>
        </div>
      </div>
    
  )
}
export default JokeDisplayCard;