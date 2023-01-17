import axios from "axios";

export const getRandomFact = async () => {
   const fact = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
   return fact.data
}