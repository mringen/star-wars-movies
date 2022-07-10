export const fetchMovies = async () => {
  let url = 'https://swapi.dev/api/films/?format=json'
  const res = await fetch(url)
  const json = await res.json()
  
  return json.results
}