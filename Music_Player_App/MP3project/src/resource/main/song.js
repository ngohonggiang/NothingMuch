const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 5500;

//HTTP loggers
app.use(morgan('combined'));
//Template engines
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.get('/music', (reg, res)=> res.render('song'));
app.get('/video', (reg, res)=> res.render('video'));
app.get('/', (reg, res)=>{
    res.render('index');
    $(".album-poster").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch');
        ap.list.switch(dataSwitchId);

         // ấn vào bài hát để phát
        ap.play();

        // click to slideUp player see
        $("#aplayer").addClass('showPlayer');
        });

    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        listFolded: true,
        audio: [
            {
                name: '3:00 AM',
                artist: 'Finding Hope',
                url: '../../source/3am.mp3',
                cover:'https://i.ytimg.com/vi/tPMFAbhlDbU/maxresdefault.jpg'
            },
            {
                name: 'Someone Like You',
                artist: 'Adele',
                url: '../../public/source/Someone Like You.mp3',
                cover:'https://upload.wikimedia.org/wikipedia/en/7/7a/Adele_-_Someone_Like_You.png'
            },
            {
                name: 'I\'ll Never Love Again',
                artist: 'Lady Gaga',
                url: '../../public/source/Ill Never Love Again.mp3', 
                cover: 'https://avatar-ex-swe.nixcdn.com/song/2018/10/05/c/0/c/6/1538706968018_640.jpg'
            },
            {
                name: 'How Long Will I Love You',
                artist: 'Ellie Goulding',
                url: '../../public/source/How Long Will I Love You.mp3',
                cover: 'https://i.pinimg.com/originals/61/71/63/617163e0dc995c70496a644549bf2f36.jpg'
            },

            {
                name: 'Always Remember Us This Way',
                artist: 'Lady Gaga',
                url: '../../public/source/Always Remember Us This Way.mp3',
                cover: 'https://i1.sndcdn.com/artworks-000658413718-3aworm-t500x500.jpg'
            },

            {
                name: 'Willow',
                artist: 'Taylor Swift',
                url: '../../public/source/willow.mp3',
                cover: 'https://avatar-ex-swe.nixcdn.com/song/2020/12/11/4/0/f/e/1607663899280_640.jpg'
            },

            {
                name: 'Stuck with U',
                artist: 'Ariana Grande & Justin Bieber',
                url: '../../public/source/Stuck with U.mp3',
                cover: 'https://newsmd1fr.keeng.net/tiin/archive/images/20200519/090154_stuck_with_u_vua_leo_len_no_1_ariana_grande_va_justin_bieber_bi_to_mua_thanh_tich_2.jpg'
            },

            {
                name: 'Exile',
                artist: 'Taylor Swift(feat. Bon Iver)',
                url: '../../public/source/Exile.mp3',
                cover: 'https://avatar-ex-swe.nixcdn.com/song/2020/07/24/f/6/5/1/1595573654337_640.jpg'
            }


        ]
    });
})