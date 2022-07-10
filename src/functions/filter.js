export const filterMovies = (list, text) => {
  return list.filter(x => {
    return x.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ? x : null
  })
}