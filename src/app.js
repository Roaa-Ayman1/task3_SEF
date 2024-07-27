const express = require('express');
const app = express();
// const app = require('express')();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, '../hbs/views');
app.set('views', viewsPath);

const poartialPath = path.join(__dirname, '../hbs/partials');
hbs.registerPartials(poartialPath);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to our website!',
        img: 'images/paner.jpeg'
    });
})

app.get('/team', (req, res) => {
    res.render('team', {
        title: 'Our Team',
        name1: "Ahmed reda",
        age1: 31,
        img1: "images/man1.jpg",
        name2: "Ayman Mohamed",
        age2: 20,
        img2: "images/man2.jpg",
        name3: "Islam Sayed",
        age3: 28,
        img3: "images/man4.jpg",
        name4: "Basel Mohsen",
        age4: 26,
        img4: "images/man5.jpg",
        name5: "Moas Sayed",
        age5: 20,
        img5: "images/man3.jpg",
        name6: "Aous Ali",
        age6: 34,
        img6: "images/man6.jpg"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        img: 'images/paner.jpeg',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illum doloremque itaque fuga ut minima voluptatem sit atque accusamus quos. Eos cumque qui, vitae sunt nulla quisquam voluptatem fugiat eaque.'
    });
})

app.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Signup',
        message: 'Welcome to our website!'
    });
})

app.get('/signin', (req, res) => {
    res.render('signin', {
        title: 'Login',
        message: 'Welcome to our website!'
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})