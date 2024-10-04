const express = require('express');

const aboutRouter = express.Router();

aboutRouter.get('/',(req,res)=>{
  res.send('About all the servers.')
})

aboutRouter.get('/:id',(req,res)=>{
  res.send(`About the server with id: ${req.params.id}`)
})

module.exports = aboutRouter;