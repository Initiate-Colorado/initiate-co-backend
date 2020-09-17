'use strict';
const axios = require('axios')
const db = require('../index');
const BallotProcess = require('./ballot_process.model.js');


const getBallotDates = () => {
  try {
    return axios.get('https://initiate-co-api.herokuapp.com/ballots/duedates')
  } catch (error) {
    console.error(error)
  }
}

function deleteBallotProcesses() {
  BallotProcess.destroy({ where: {}, truncate: true, restartIdentity: true })
  console.log('deleted all ballots')
}

function parseResponse() {
  var response = getBallotDates().then(response => {
    response.data.forEach(ballotProcess => {
    BallotProcess.create({
        title: "",
        dueDate: ballotProcess,
        description: "",
      })
    })
    console.log("Ballot Process Dates Complete")
  }).catch(error => console.log(error))
}

deleteBallotProcesses();
parseResponse();

