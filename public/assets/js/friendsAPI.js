const { fetch, alert } = window

const getFriendsAPI = _ => {
  fetch('/friendsAPI')
    .then(r => r.json())
    .then(r => {
      //console.log(r)
      document.querySelector('#friendsList').innerHTML = ''
      r.forEach(({ name, photo, scores }) => {
        let friendDiv = document.createElement('div')
        friendDiv.innerHTML = `
          {name:${name}<br>
          photo:${photo}<br>
          scores:[${scores}]}<br><br>`
          friendDiv.className = 'json_obj'
       document.querySelector('#friendsList').append(friendDiv)
     })
    })
    .catch(e => console.error(e))
}

getFriendsAPI()





