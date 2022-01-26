import JokeDisplayCard from "./JokeDisplayCard";

const JokeList = ({ jokes }) => {
  return(
    <div className="jokeList">
      {jokes.map((joke, i)=>{
        return <JokeDisplayCard 
                key={i} 
                id={joke.id} 
                type={joke.type}
                question={joke.headline}
                answer={joke.punchline}
                />
      })}
    </div>

  )
}
export default JokeList;