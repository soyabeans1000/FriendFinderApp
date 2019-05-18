const { fetch, alert } = window

const numOfQuestions = 10

const getCompatibleUser = (x,y,z) => {


  fetch('/friendsAPI')
  .then(r => r.json())
  .then(friends =>  {
    let sum = 0
    let bestMatch = friends[0]
    let bestMatchDiff = 0
    let noOfFriends = friends.length

for (let i=0; i < noOfFriends; i++)
    {
      sum = 0
      
      for (let j=0; j < friends[i].scores.length; j++)
        {
         
          let friend_score = friends[i].scores[j]
          let form_score = z[j]
            

          let diff = Math.abs(friend_score - form_score)
         
          sum = sum + diff 
    }


    if (i === 0)
      {
        
        bestMatchDiff = sum
      }
   

    
    if (sum < bestMatchDiff)
    {
      
      bestMatch = friends[i]
      bestMatchDiff = sum
    }
    
   
    }

   showFriends(bestMatch.name,bestMatch.photo)
  })
 }


 const showFriends = (x,y) => 
 {
    document.querySelector('#friendsList').innerHTML = x
    let photoDiv = document.createElement('img')
    photoDiv.src = y
    document.querySelector('#friendsList').append(document.createElement('br'))
    document.querySelector('#friendsList').append(photoDiv)
  }

document.querySelector('#submitBtn').addEventListener('click', e => {
  e.preventDefault()
  console.log
  let scores = []
  let i;
  for (i = 1; i <= numOfQuestions; i++) { 
   scores[i-1] = document.querySelector(`#q${i}`).value
 }


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
      
      getCompatibleUser(document.querySelector('#name').value,document.querySelector('#photo').value,scores)
      })
    .catch(e => console.error(e))
})