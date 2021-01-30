new Vue({
    el: '#desafio',
    data: {
        name: 'Tobias Rocha da Rosa',
        age: 30,
        linkImage: 'https://graduacao.ufabc.edu.br/emat/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
    },
    methods: {
        showNumbersRandom() {
            return Math.random();
        },
    }
})