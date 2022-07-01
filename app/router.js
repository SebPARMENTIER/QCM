const express = require('express');

// importing controllers
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

// importing middlewares
const adminMiddleware = require('./middlewares/admin');

const router = express.Router();

// home page
router.get('/', mainController.homePage);

// quizz page
router.get('/quiz/:id', quizController.quizzPage);
router.post('/quiz/:id', quizController.playQuizz);

// tags "tags" ("sujets")
router.get('/tags', tagController.tagList);

// quizzes par tag
router.get('/quizzes/tag/:id', quizController.listByTag);

// user signup/login
router.get('/signup', userController.signupPage);
router.get('/login', userController.loginPage);

router.post('/signup', userController.signupAction);
router.post('/login', userController.loginAction);

router.get('/disconnect', userController.disconnect);

router.get('/profile', userController.profilePage);

// admin
router.get('/admin', adminMiddleware, adminController.adminPage);

module.exports = router;