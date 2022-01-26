

const JokeDisplayCard = ({question, answer, key}) => {
const result = (answer==="") ? null:<h3>{answer}</h3>
  return(
    <div>
      <h1>{key}</h1>
      <h3>{question}</h3>
      {result}
    </div>
  )
}
export default JokeDisplayCard;