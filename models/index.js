module.exports = {

    Inbox: require('./inbox'),
    Project: require('./project'),
}




// console.log(firebase.database().ref().child('michael').on('value', snap => console.log(snap.val())))