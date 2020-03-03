export let userToken = localStorage.getItem('userToken') || ''
export let userId: string 
export let userName: string

fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'x-access-token': userToken
    },
  })
  .then(response => response.json()) 
  .then(response => {
      userId = response._id
      userName = response.name
    })
    