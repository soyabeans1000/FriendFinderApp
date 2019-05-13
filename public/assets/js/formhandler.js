const { fetch, alert } = window

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

document.querySelector('#submitBtn').addEventListener('click', e => {
  e.preventDefault()
  fetch('/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.querySelector('#name').value
    })
  })
    .then(r => {



    console.log(r)

     
    })
    .catch(e => console.error(e))
})

// document.querySelector('#updateUser').addEventListener('click', e => {
//   e.preventDefault()
//   let newValues = {}
//   if (document.querySelector('#newname').value) {
//     newValues.name = document.querySelector('#newname').value
//   }
//   if (document.querySelector('#newemail').value) {
//     newValues.email = document.querySelector('#newemail').value
//   }
//   if (document.querySelector('#newpassword').value) {
//     newValues.password = document.querySelector('#newpassword').value
//   }
//   fetch(`/users/${document.querySelector('#uid').value}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newValues)
//   })
//     .then(_ => {
//       alert('User updated.')
//       getUsers()
//     })
//     .catch(e => console.error(e))
// })


// document.addEventListener('click', e => {
//   if (e.target.id === 'deleteUser') {
//     fetch(`/users/${e.target.dataset.uid}`, { method: 'DELETE' })
//       .then(_ => {
//         alert('User deleted.')
//         getUsers()
//       })
//       .catch(e => console.error(e))
//   }
// })

//updateFriends()
