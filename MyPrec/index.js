const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'hello'
});

connection.connect();

const app = express()

app.use(bodyParser.json());
app.use(cors())

app.get('/users', (req, res) => {

  res.send([{name: "gigi 1"}])

})

app.get('/cvc/:id', (req, res) => {
  res.send({name: "gigi", id: req.params.id})
})
  
app.get('/cv/:ID', (req, res) => {
var user_id = req.param('ID');
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "hello"
                            });

                                con.connect(function(err) {
                                  if (err) throw err;
                                  con.query('SELECT ID,nume,prenume,dataNastere,diplome,Remarks,AutoEval FROM  ListaCV where ID=? ', [user_id] , function (err, row, fields) {
                                    if (err) throw err;
                                    console.log(row);	
                                    return res.json(row);
                                    res.send(row);

                                })
                                
    
});
})


app.get('/', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "hello"
                            });

                                con.connect(function(err) {
                                  if (err) throw err;
                                  con.query("SELECT * FROM cv order by ID DESC ", function (err, row, fields) {
                                    if (err) throw err;
                                    console.log(row);	
                                    return res.json(row);
                                    res.send(row);

                                })
                                
    
});
})

app.post('/', (req, res) => {
    
        let content = req.body;

        console.log(content);

        let result = {
            nume: `${content.nume}`,
            prenume: `${content.prenume}`,
		dataNastere: `${content.dataNastere}`,
		diplome: `${content.diplome}`,
		Remarks: `${content.Remarks}`,
		AutoEval: `${content.AutoEval}`
        }

var post  = {nume: `${content.nume}`, prenume: `${content.prenume}`, dataNastere: `${content.dataNastere}`,
diplome: `${content.diplome}`,Remarks: `${content.Remarks}`,AutoEval: `${content.AutoEval}`};
     
        var query = connection.query('INSERT INTO cv SET ?', post, function (error, results, fields) {
            if (error) throw error;
            // Neat!
          });
          console.log(query.sql);
        res.send(result)
    })

    app.post('/update', (req, res) => {
    
      var ID = req.param('ID');
      var nume = req.param('nume');
      var prenume = req.param('prenume');
      var dataNastere = req.param('dataNastere');
      var diplome = req.param('diplome');
      var Remarks = req.param('Remarks');
      var AutoEval = req.param('AutoEval');

         
     console.log(ID);
     console.log(nume);
     console.log(prenume);
     console.log(dataNastere);
     console.log(diplome);
     console.log(Remarks);
     console.log(AutoEval);
    })
     
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
console.log('Time: ', Date.now())