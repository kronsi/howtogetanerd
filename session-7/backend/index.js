import express from 'express';
import mysql from "mysql";
import fs from "fs";
import moment from 'moment';
import axios from "axios";
import cors from 'cors';
import bodyParser from 'body-parser';


const config = require("config.json")("./bn-config.json");
const app = express();
const port = 3001;


const dbConnection = mysql.createPool({
    connectionLimit : config.mysql.connectionLimit,
    host            : config.mysql.host,
    user            : config.mysql.user,
    password        : config.mysql.password,
    database        : config.mysql.database
});

app.use(cors());
// min timeout for callbacks that are not passed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/google', (req, res) => {
    axios.get('http://google.de/')
      .then(function (response) {
        // handle success
        console.log(response);
        res.send(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        res.send('Fehler')
      })
    
})

//get books
app.get('/books', (req, res) => {    
    let query = "SELECT * FROM books";
    dbConnection.query(query, (error, results, fields) => { 
        if(error){
            res.json(error);
        }
        else {
            res.json(results);
        }
    });            
})

//get tours
app.get('/tours', (req, res) => {    
    const data = fs.readFileSync('./example_tour.csv', 'utf8');
    //console.log("data", data);
    const lines = data.split("\n");
    //console.log("lines", lines);
    let header = [];
    let tours = [];
    for(let i=0; i < lines.length; i++){
        if(i==0){//header
            header = lines[i].split(";");
            header.push("DateTime");
            //console.log("header", header);
        }
        else {//body
            const rows = lines[i].split(";");
            let tour = {};
            for(let j=0; j < header.length; j++){                
                switch( header[j] ){
                    case "DateTime":
                        tour[header[j]] = moment().format("YYYY-MM-DD hh:mm:ss");
                    default:
                        if( rows[j] ){
                            tour[header[j]] = rows[j];
                        }
                        break;                    
                }
                
                
            }
            
            if( Object.keys(tour).length > 0 ){
                tours.push(tour);
            }
        }
    }

    //fs.writeFileSync("./test.json", JSON.stringify(tours));
    
    res.json(tours);    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})