'use strict';
// Create ballots in DB with necessary information
const axios = require('axios')
const model =  require('../modules/ballots/model.js')

const getBallots = () => {
  try {
    return axios.get('https://initiate-co-api.herokuapp.com/ballots/')
  } catch (error) {
    console.error(error)
  }
}

// function hitApi() async => {
//   const ballots = getBallots()
//     .then(response => {
//       console.log(model.Ballot)
//     })
// }

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log());
    }, 2000);
  });
}
async function hitApi(){
  const ballots = getBallots().then(response=>{
    console.log(Ballot)
  })
}

hitApi()
