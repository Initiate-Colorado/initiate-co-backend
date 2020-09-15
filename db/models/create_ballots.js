// Create ballots in DB with necessary information
'use strict';
const axios = require('axios')
const db = require('../index');
const Ballot = require('./ballot.model.js');


let repData = [];
let ballotData = [];

const getBallots = () => {
  try {
    return axios.get('https://initiate-co-api.herokuapp.com/ballots/')
  } catch (error) {
    console.error(error)
  }
}

function parseResponse(){
  var response = getBallots().then(response => {
    response.data.forEach(ballot=>{
      if(ballot.ballotTitle != undefined && ballot.ballotNumber != 120){
        ballotData.push(ballot)
      }
    });
    console.log(`ballotData`, response.data)

    response.data.forEach(ballot=>{
      if(ballot.representative2 == undefined && ballot.ballotTitle == undefined){
        repData.push(ballot)
      }
    });
    console.log('repData', repData)
    createBallots(ballotData);
    // updateOddBallots(repData);
    updateEvenBallots(repData);
}).catch(error=> console.log(error))
}

function deleteBallots(){
  Ballot.destroy({where: { }, truncate: true, restartIdentity: true})
  console.log('deleted all ballots')
}

function createBallots(ballotData){
  ballotData.forEach(ballot =>{
      Ballot.create({
        title: ballot.ballotTitle,
        ballotNumber: ballot.ballotNumber,
        subject: "On Ballot 2020",
        description: "",
        updatedAt: Date.now(),
        createdAt: Date.now()
      })
    })
  console.log('finished creating ballots')
}
function updateEvenBallots(repData){
  for(let j=0, z=1;j<repData.length;j+=2,z++){
    Ballot.update({
      corepresentative: repData[j].representative1,
      corepresentativeAddress: repData[j].representative1Address,
      representative: repData[j+1].representative1,
      representativeAddress: repData[j+1].representative1Address
    }, {where: {id: z}})
  }
  console.log('finished updating even ballots')
}

parseResponse();
deleteBallots();
