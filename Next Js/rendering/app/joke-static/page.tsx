import { Joke } from "../type/joke";

const JokeStaticPage = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "force-cache",
  });
  const joke: Joke = await res.json();
  const buildTime = new Date().toLocaleTimeString();

return (
  <div>
    <h2>Joke Static Page</h2>
    <p>Build Time: {buildTime}</p>
    <p>{joke.setup}</p>
    <p>{joke.punchline}</p>
  </div>
);
};

export default JokeStaticPage;
