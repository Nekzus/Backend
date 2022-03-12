const express = require('express');
const app = express();
const PORT =8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const productos=[];

const routerProductos = express.Router();    


app.get('/api/productos', (req, res) => {
    
}); 

app.get('/api/productos/:id', (req, res) => {
    
    });

routerProductos.get('/', (req, res) => {
    res.status(200).json({productos});
}); 

routerProductos.post('/', (req, res) => {
    // console.log(req.body);
    const {body} = req; 
    productos.push(body);
    console.log(productos);
    res.render('home', {msg: 'Producto agregado'});
    });



app.put('/api/productos/:id', (req, res) => {
    });

app.delete('/api/productos/:id', (req, res) => {
    });

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
}); 

app.use('/api/productos', routerProductos);
 
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:8080`));
server.on('error', (err) => console.log(err));