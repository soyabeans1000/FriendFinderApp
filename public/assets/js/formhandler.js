const { fetch, alert } = window

const numOfQuestions = 10

const getCompatibleUser = (x,y,z) => {


  fetch('/friendsAPI')
  .then(r => r.json())
  .then(friends =>  {
    let sum = 0
    let bestMatch = friends[0]
    let bestMatchDiff = 0
    console.log('bestMath setting' + bestMatch)

for (let i=0; i < friends.length-1; i++)
    {
      console.log('i=> ' + i)
      sum = 0
      for (let j=0; j < friends[i].scores.length-1; j++)
        {
          console.log('j=> ' + j)
          let friend_score = friends[i].scores[j]
          let form_score = z[j]
          let diff = Math.abs(friend_score - form_score)
          //console.log('diff' + diff)
          sum = sum + diff 
    }

    if (i === 0)
      {
        console.log('initial diff')
        bestMatchDiff = sum
      }

    console.log('AFTER sum' + sum + 'bestMatchDiff=>' + bestMatchDiff)
    if (sum < bestMatchDiff)
    {
      console.log('sinde if')
      bestMatch = friends[i]
      bestMatchDiff = sum
    }
    console.log('AFTER sum' + sum + 'bestMatchDiff=>' + bestMatchDiff)
    console.log(bestMatch)
    }

   showFriends(bestMatch.name,bestMatch.photo)
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
      console.log(r)
      getCompatibleUser(document.querySelector('#name').value,document.querySelector('#photo').value,scores)
      })
    .catch(e => console.error(e))
})