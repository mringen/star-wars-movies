export const sortMovies = (list, key) => {

  return list.sort((a,b) => {
    if(new Date(a) !== "Invalid Date") {
      let dateA = new Date(a[key])
      let dateB = new Date(b[key])
      return dateA > dateB ? 1 : -1
    }
    else if(a[key] === b[key]) return 0
    else return a[key] > b[key] ? 1 : -1
  })
}