import { HTTP } from "./http.js"
import { UI } from "./ui.js"
const http = new HTTP
const ui = new UI
const searchBox = document.getElementById("search")
const url = "https://randomuser.me/api/?results=50"



http.getProfiles(url)
  .then(data => {
    let profiles = data.results.
      filter(data => /[A-z]/.test(data.name.first))
    ui.showProfiles(profiles)
  })

// add search evert lisnet

searchBox.addEventListener("input", filterProfiles)

function filterProfiles(e) {

  ui.filterProfiles(e.target.value)
}







