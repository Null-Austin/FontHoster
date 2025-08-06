const express = require('express')
const fs = require("node:fs")
const path = require('node:path')

const port = process.env.fontsport || 3000

const app = express()
app.get('/font/:font',(req,res)=>{
    res.sendFile(path.join(__dirname,'fonts',req.params.font),err=>{
        res.status(404).json({error:"no font found"})
    })
})
app.listen(port,err=>{
    if (err) return console.err(err);
    console.log("http://localhost:"+port)
})