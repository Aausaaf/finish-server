const express = require('express')
const { getdata, postdata , serachdata} = require('../handlers/dictionary')

const appRoutes = express.Router()

appRoutes.get("/getdata",getdata)

appRoutes.post("/postdata",postdata)
appRoutes.get("/search/:name",serachdata)

module.exports ={
    appRoutes
}