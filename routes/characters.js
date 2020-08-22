var express = require('express');
var router = express.Router();
const characters = require('../controllers/characterController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    characters.getAllCharacters();
});

router.post('/', (req, res) => {
    console.log(req)
    characters.createCharacter(req, res);
})

router.get('/:characterId', (req, res) => {
    characters.getSingleCharacter();
})

module.exports = router;
