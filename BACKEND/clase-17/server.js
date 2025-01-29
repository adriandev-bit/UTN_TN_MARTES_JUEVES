const PORT = 3000;
import express from 'express'
import {engine} from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/home', (req, res) =>{
    res.render('home-view', {
        name: 'pepe', 
        has_banner: true,
        banner:'<h3>comprar nvidia </h3>',
        layout: 'main',
        notifications: 10,
        has_notifications: false,
        friends: users,
        posts: posts
    })
})

app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})

const users = [
    {
        id: 1,
        name: 'Anne',
        is_connected: true
    },
    {
        id: 2,
        name: 'Pepe',
        is_connected: false
    },
    {
        id: 3,
        name: 'Maria',
        is_connected: true
    },
]


const posts = [
    {
        id: 1,
        title: 'Porque no aprender HTML',
        text: 'Enserio seguis leyendo esto?',
        likes: 52,
        retweets: 4,
        comments: [
            {
                id: 1,
                name: "pepe.dev",
                text: "esto no es gracioso, reportado!",
                likes: 3
            },
            {
                id: 2,
                name: "maria.dev",
                text: "No es mi lenguaje de programacion favorito",
                likes: 5
            }
        ]
    },
    {
        id: 2,
        title: 'Team frio o calor?',
        text: 'Seguramente gana el frio por goleada pero quiero oir su opinion',
        likes: 0,
        retweets: 0,
        comments: [
            {
                id: 3,
                name: "pepe.dev",
                text: "Me gusta ir a la playa",
                likes: 0
            }
        ]
    }
]

app.post('/posts', (req, res) => {
    console.log(req.body);

    posts.push({
        id: posts.length,
        title: req.body.title,
        text: req.body.text,
        likes: 0,
        retweets: 0,
        comments: []
    });

    res.render('main-view', {
        notifications: 0,
        has_notifications: false,
        friends: users,
        posts
    });
});
