const express = require('express');
const router = express.Router();
const colors = require('colors');
const Promise = require('bluebird');

const checkinsRouter = require('./checkin.js');
const milestonesRouter = require('./milestone.js');
const goalsRouter = require('./goal.js');
const resourcesRouter = require('./resource.js');
const usersRouter = require('./user.js');

router.use('/checkins', checkinsRouter);
router.use('/milestones', milestonesRouter);
router.use('/goals', goalsRouter);
router.use('/resources', resourcesRouter);
router.use('/users', usersRouter);

module.exports = router;