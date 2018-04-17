var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


// import App from ''
var Inbox = require('../../models/Inbox');



export const Routes = () => {
  <Switch>
      <Route exact path='/' component={App}/>
  </Switch>


}


router.get('/', function(req, res){
  res.render('index')
  console.log('GET / has been called')
});


module.exports = router;