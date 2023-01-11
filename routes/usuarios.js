
const { Router } = require('express');

const { userGet, userPost,userPatch,userDelete, userPut } =  require('../controllers/users')

const router = Router();


router.get('/', userGet );

router.post('/', userPost);

router.put('/:id', userPut);


router.patch('/', userPatch);


router.delete('/', userDelete);


module.exports = router;