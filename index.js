import express from "express";
import bodyParser from "body-parser";
import geoip from "geoip-lite";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set('trust proxy', true)

app.get('/', (req,res)=>{
    res.render("index.ejs",{});
})

var geo = geoip.lookup('207.97.227.239');
console.log(geo);
var API_KEY ="845402fc94d54ddfade3de406dcdc742"

app.post('/welcome', async(req, res)=>{
    
    try{
        const response = await axios.get(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&include=minutely&lat=${geo.ll[0]}&lon=${geo.ll[1]}`)
        res.render("welcome.ejs",{
            cusname:req.body.cusName,
            city:geo.city,
            

        })
    }
    catch(err){
        res.render("welcome.ejs", {cusname:req.body.cusName,city:geo.city});
        console.log(err.message);
        res.status(500)
    }
})

app.get('/contact', (req, res)=>{
    res.render("contact.ejs", {

    })
})

app.listen(port, ()=>{
    console.log(`Listening from port ${port}`)
})