// metto l'indirizzo URL della libreria dentrtro una costante

const libriLink = "https://striveschool-api.herokuapp.com/books"

// creo una variabile dove inserire i libri presi dalla richiesra al sito
const getLibri = function () {
  fetch(libriLink)
    .then((res) => {
      if (res.ok === true) {
        // come da lezione proseguo cercando di recuperare il body
        return res.json()
      } else {
        throw new Error("Errore nella risposta!")
      }
    })
    .then((data) => {
      console.log("libri", data)
      const container = document.getElementById("container-libri")

      data.forEach((libro) => {
        const col = document.createElement("div")
        col.classList.add("col", "mb-4")
        col.innerHTML = `
          <div class="card shadow">
            <img src="${libro.img}" class="card-img-top img-fluid" alt="${libro.title}">
            <div class="card-body">
              <h5 class="card-title">${libro.title}</h5>
              <p class="card-text">
                ${libro.category} 
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Categoria: ${libro.category}</li>
              <li class="list-group-item fw-bold">Prezzo: ${libro.price} €</li>
              <li class="list-group-item text-muted">ID: ${libro.asin}</li>
            </ul>
            <div class="card-body d-flex justify-content-between">
              <button type="button" class="btn btn-primary">Compra</button>
             <button type="button" class="btn btn-danger">Scarta</button>
            </div>
          </div>
          `

        container.appendChild(col)

        const btnScarta = col.querySelector(".btn-danger")
        btnScarta.addEventListener("click", function () {
          col.remove()
        })
      })
    })
    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getLibri()
