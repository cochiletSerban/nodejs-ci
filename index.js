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

/*

{ push: { changes: [ [Object] ] },
  repository: 
   { scm: 'git',
     website: '',
     name: 'selenium-testing',
     links: { self: [Object], html: [Object], avatar: [Object] },
     project: 
      { links: [Object],
        type: 'project',
        uuid: '{40225f98-616c-4c01-ae9a-4638b23ade28}',
        key: 'MCP',
        name: 'Medic Chat Project' },
     full_name: 'medic-chat/selenium-testing',
     owner: 
      { username: 'medic-chat',
        type: 'team',
        display_name: 'Medic Chat Team',
        uuid: '{b1a769d6-7ac9-4eac-b082-c7e3a8b562a5}',
        links: [Object] },
     type: 'repository',
     is_private: true,
     uuid: '{80b87d4e-bfc6-47b5-8337-30d63b6b5cec}' },
  actor: 
   { username: 'cochiletSerban',
     display_name: 'Cochilet Serban',
     account_id: '5b30c46155b2312db2b86dce',
     links: { self: [Object], html: [Object], avatar: [Object] },
     type: 'user',
     uuid: '{6b523391-422d-4678-8e21-cf7d944ce55d}' } }

*/