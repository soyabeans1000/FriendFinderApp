const { fetch, alert } = window

const numOfQuestions = 10





const getCompatibleUser = (x,y,z) => {


  fetch('/friendsAPI')
  .then(r => r.json())
  .then(friends =>  {
    document.querySelector('#friendsList').innerHTML = friends[0].name

    let photoDiv = document.createElement('img')

    photoDiv.src = friends[0].photo

    document.querySelector('#friendsList').append(photoDiv)

   console.log('friends list' + friends[0].name) 
  })
  
 

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





