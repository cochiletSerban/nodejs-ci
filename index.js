const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');

const port = 80;

let app = express();
app.use(cors()); // Necessary for front-end(post, get)
app.use(bodyParser.json());


app.post('/yolo', (request, response) => {
    console.log(request.body);
    response.send("yolo");
});

app.listen(port, () => {
	console.log('asculta gitu');
});
