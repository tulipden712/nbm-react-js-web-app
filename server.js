// import helmet from 'react-helmet';
import { StaticRouter as Router } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
const path = require('path');
const app = express();
import App from './src/App';

//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('build'));

app.get('*', (req, res) => {
  try {
    //res.sendFile(path.join(__dirname, 'index.html'));
    let context = {};
    const html = ReactDOMServer.renderToString(
      <Router context={context} location={req.url}> 
        <App />
      </Router>
    );
    //check context for url, if url exists then react router has ran into a redirect
    if (context.url)
      //process redirect through express by redirecting
      res.redirect(context.status, 'http://' + req.headers.host + context.url);
    else
      //else send down page with initial state and meta data
      res.send(renderFullPage(html));
  } catch (error) {
    res.status(400).send(renderFullPage('An error occured. '+ error));
  }
});

var server = app.listen(9000, function () {
  var port = server.address().port;
  console.log("Now running on port", port);
});

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <link href="styles/index-one.styles.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" src="index.bundle.js"></script>
        <script type="text/javascript" src="libraries.bundle.js"></script>
      </body>
    </html>
    `
}