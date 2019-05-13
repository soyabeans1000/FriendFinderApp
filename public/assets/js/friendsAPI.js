const { fetch, alert } = window




const getFriendsAPI = _ => {
  fetch('/friendsAPI')
    .then(r => r.json())
    .then(r => {

      console.log(r)




      document.querySelector('#friendsList').innerHTML = ''
      r.forEach(({ name, photo, scores }) => {
        let friendDiv = document.createElement('div')
        friendDiv.innerHTML = `
          <h6>{\n\n${name}</h6>
          <h6>${photo}</h6>
          <h6>${scores}\n\n}</h6>`
       document.querySelector('#friendsList').append(friendDiv)
     })
    })
    .catch(e => console.error(e))
}


getFriendsAPI()





