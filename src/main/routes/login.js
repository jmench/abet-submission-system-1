var express = require('express');
var mustache = require('../common/mustache')
var router = express.Router();
var user = require('../models/User')
var user_lib = require('../lib/user')

/* GET login page */
router.get('/', function (req, res, next) {
	res.render('base_template', {
		title: 'Login',
		body: mustache.render('login')
	})
})

/* POST login page */
router.post('/', (req, res, next) => {
	// hard coded username and password
  if (req.body.username === 'user' && req.body.password === 'password' && user_lib.is_whitelisted(req.body.username)) {
		res.redirect(302, '/course/')
	} else {
		res.redirect(302, '/login/')
	}

})

module.exports = router;
