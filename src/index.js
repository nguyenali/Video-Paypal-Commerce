const express = require("express");
const path = require('path')
const app = express();
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000;


const routingMw = ( req, res, next ) => {
    const pathP =  req.params.path
    next()
};



app.use('/', express.static(path.join( __dirname, '/static' )) )


app.get('/', (req, res) => {
    
})

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, './static/checkout.html'))
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});