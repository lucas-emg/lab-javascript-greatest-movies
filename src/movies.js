// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  let allDirectors = arr.map(movie => movie.director)

  return allDirectors

}

//clear the array from the duplicates

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  let stevenSpilgerbMovies = arr.filter(movie => movie.director === 'Steven Spielberg')

  let stevenSpielbergDramaMovies = stevenSpilgerbMovies.filter(movie => movie.genre.includes('Drama'))

  return stevenSpielbergDramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0
  } 

  for (let i = 0; i < arr.length; i++) {
    if(arr[i].score === undefined) {
      arr[i].score = 0;
    }
  }
  
  let avarageScore = arr.reduce((sum, score) => score.score + sum, 0) / arr.length
  
  return Math.round(avarageScore*100)/100


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) {
    return 0
  }

  let dramaMoviesAvarageScore = Math.round(dramaMovies.reduce((sum, score) => score.score + sum, 0) / dramaMovies.length * 100) / 100

  return dramaMoviesAvarageScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {


  let sortedMovies = arr;
  let finalSortedMovies = [];
  
  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      } else {
        return 1
      }
  } else {
    return a.year - b.year
  }
  })

  sortedMovies.forEach(movie => finalSortedMovies.push(movie))

  return finalSortedMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

 let movieTitles = arr.map(movie => movie.title)

 

 movieTitles.sort((a,b) => {
  if (a < b) {
    return -1
  } else {
    return 1
  }
})

 movieTitles.splice(20)

 return movieTitles

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
