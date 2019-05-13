const { fetch, alert } = window

const numOfQuestions = 10

// const getUsers = _ => {
//   fetch('/users')
//     .then(r => r.json())
//     .then(users => {
//       document.querySelector('#userView').innerHTML = ''
//       users.forEach(({ id, name, email, password }) => {
//         let userDiv = document.createElement('div')
//         userDiv.innerHTML = `
//           <h3>#${id} ${name}</h3>
//           <h5>${email}</h5>
//           <h6>${password}</h6>
//           <button id="deleteUser" data-uid="${id}">delete user</button>
//         `
//         document.querySelector('#userView').append(userDiv)
//       })
//     })
//     .catch(e => console.error(e))
// }



const getFriendsAPI = _ => {
  fetch('/friendsAPI')
    .then(r => r.json())
    .then(users => {
      document.querySelector('#userView').innerHTML = ''
      users.forEach(({ id, name, email, password }) => {
        let userDiv = document.createElement('div')
        userDiv.innerHTML = `
          <h3>#${id} ${name}</h3>
          <h5>${email}</h5>
          <h6>${password}</h6>
          <button id="deleteUser" data-uid="${id}">delete user</button>
        `
        document.querySelector('#userView').append(userDiv)
      })
    })
    .catch(e => console.error(e))
}


const getCompatibleUser = _ => {
  
  document.querySelector('#friendsList').innerHTML = "Here is your list of friends"

}


document.querySelector('#submitBtn').addEventListener('click', e => {
  e.preventDefault()

  console.log

  let scores = []
  let i;
  for (i = 1; i <= numOfQuestions; i++) { 
   scores[i-1] = document.querySelector(`#q${i}`).value

    console.log(document.querySelector(`#q${i}`).value)
  }

  
console.log(scores)

  fetch('/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      photo: document.querySelector('#photo').value,
      score: scores

    })
  })
    .then(r => {

      console.log(r)
      getCompatibleUser()

     
    })
    .catch(e => console.error(e))
})





