const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes, postRoutes } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoutes.route);
app.use('/user', userRoutes.route);
app.use('/categories', categoryRoutes.route);
app.use('/post', postRoutes.route);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
