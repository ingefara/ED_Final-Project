//#region Basic Requirements

const express = require('express');
const router = require('express').Router();

const userController = require('../controllers/user');

//#endregion

//#region Middleware Configuration

const passport = require('passport');
require('../features/jwt')(passport);

//#endregion

//#region Routes

router.get('/:id', passport.authenticate('jwt', {session: false}), userController.getUserInformations);

//#endregion
