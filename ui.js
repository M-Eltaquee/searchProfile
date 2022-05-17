const profilesBody = document.getElementsByClassName("body")
const load = document.getElementById(".load")

export class UI {
  showProfiles(profiles) {

    let html = "";

    profiles.forEach(element => {
      html +=
        `<div class="profile-item">
        <img src="${element.picture.thumbnail}" alt=""class="profile-img" />
        <div class="profile-item-text">
          <h4 class="profile-name">
          <span>${element.name.title}</span>. 
          <span>${element.name.first} ${element.name.last}</span>
          </h4>
          <p class="profile-location">
          <span>${element.location.state}</span>
          , <span>${element.location.country}</span>
          </p>
        </div>
    </div>`
    });
    profilesBody[0].innerHTML = html

  }


  filterProfiles(searchItem) {
    const itemsArr = document.querySelectorAll(".profile-item")

    itemsArr.forEach(elem => {
      let name = elem.children[1].children[0].children[1].innerText.toLowerCase()
      let city = elem.children[1].children[1].children[0].innerText.toLowerCase()
      let country = elem.children[1].children[1].children[1].innerText.toLowerCase()

      if (name.includes(searchItem.toLowerCase()) ||
        city.includes(searchItem.toLowerCase()) ||
        country.includes(searchItem.toLowerCase())
      ) {
        elem.classList.remove("hide")
      }
      else {
        elem.classList.add("hide")
      }

    })
  }
}
