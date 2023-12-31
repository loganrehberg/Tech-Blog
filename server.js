const express = require('express');
const routes = require('./routes');

const app = expresss();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});