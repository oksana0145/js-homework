const movies = [ 
    {
        id: 1,
        title: "Гаррі Поттер та філософський камінь",
        year: 2001,
        watched: false,
    },
    {
        id: 2,
        title: "Щоденник пам'яті",
        year: 2004,
        watched: false
    },
    {
        id: 3,
        title: "Сам у дома",
        year: 1990,
        watched: false,
    },
    {
        id: 4,
        title: "Ідеальне Різдво для собаки",
        year: 2026,
        watched: false
    },
]

const movieList = document.getElementById("movie-list")


// це була початкова версія,  виконати завдання через for of. 
//на занятті ми це зробили через forEach, тому вирішила його також тут написати 

// for (const movie of movies) {
//     const element = document.createElement("li")
//     element.textContent = `${movie.title}, ${movie.year}`
//     movieList.appendChild(element)
// };




// варіант 2, через метод масиву forEach

movies.forEach( movie => {
    const elementList = document.createElement("li")
    elementList.textContent = `${movie.title}, ${movie.year}`
    movieList.append(elementList)
})

document.title = `All movies: ${movies.length}`;