const { response } = require("express")


const userGet = (req = request, res = response) => {


    const query = req.query


    res.json({
        ok: true,
        message: 'get api'
    })
};


const userPost = ( req , res = response ) => {

    const body = req.body;
    
    res.json({
        ok: true,
        body,    
        message: 'post api'
    })
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        id,
        message: 'put api'
    })
}


const userPatch = (req, res = response) => {
    res.json({
        ok: true,
        message: 'put api'
    })
}

const userDelete = (req, res) => {
    res.json({
        ok: true,
        message: 'delete api'
    })
}

module.exports = {
    userGet,
    userPost,
    userPatch,
    userPut,
    userDelete
}