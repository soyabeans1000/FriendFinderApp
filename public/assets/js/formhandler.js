const { fetch, alert } = window

const numOfQuestions = 10

const getCompatibleUser = (x,y,z) => {


  fetch('/friendsAPI')
  .then(r => r.json())
  .then(friends =>  {
   
    for (let i=0; i < friends.length; i++)
    {console.log("Freinds score=>" + friends[i].scores)
      console.log(z[i])
    }
   showFriends(friends[0].name,friends[0].photo)
  })
  
 }


 const showFriends = (x,y) => 
 {
  document.querySelector('#friendsList').innerHTML = x
   let photoDiv = document.createElement('img')
     photoDiv.src = y
     document.querySelector('#friendsList').append(photoDiv)
 
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
      getCompatibleUser(document.querySelector('#name').value,document.querySelector('#photo').value,scores)
      })
    .catch(e => console.error(e))
})





