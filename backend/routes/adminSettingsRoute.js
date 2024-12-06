const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

const {
    getSettings,
    updateSettings
} = require('../controllers/adminSettingsController')

router.use(auth)

router.get('/all', getSettings)
router.patch('/update', updateSettings)

module.exports = router