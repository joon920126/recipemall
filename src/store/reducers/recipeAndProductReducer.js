const initState = {
    favorite:[],
    recipe: [
        {
            type: 'recipe',
            id: '1',
            name: '연어 타르타르',
            time: 15,
            difficulty: '중',
            tag: [],
            ingredients: ['연어', '비트', '아보카도', '간장', '와사비', '어린잎채소'],
            img: 'https://www.huonaqua.com.au/wp-content/uploads/2015/10/Tartare-Square-360x360.jpg',
            contentimg: [
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
                'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg',
            ],
            content: [
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum, at quaerat molestias laudantium ex inventore temporibus eos, nesciunt modi illum, explicabo reprehenderit quia obcaecati alias quidem corrupti rerum veritatis!"
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '2',
            name: '치킨 누들 수프',
            time: 20,
            tag: ['닭고기', '닭가슴살', '닭'],
            difficulty: '하',
            ingredients: ['닭가슴살', '양파', '당근', '셀러리', '완두콩', '치킨스톡', '타임', '후추', '숏파스타', '올리브유'],
            img: 'http://images.media-allrecipes.com/userphotos/960x960/4552426.jpg',
            contentimg: [
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg',
                'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg'
            ],
            content: [
                "닭가슴살을 끓는 물에 넣습니다.",
                "닭가슴살이 익는 동안, 양파와 당근, 셀러리를 잘게 썰어주세요.",
                "다 삶은 닭가슴살은 꺼내서 적당한 크기로 썰거나 찢어주세요.",
                "냄비를 중불에 올리고 올리브유를 두른 뒤, 양파와 당근, 셀러리, 타임을 넣고 볶아주다가 뚜껑을 닫고 5분동안 기다립니다.",
                "치킨스톡을 한개 넣고 물을 500ml 부어주세요.",
                "물이 끓으면 닭가슴살을 넣고, 후추를 약간 넣어주세요. 여기까지는 미리 해놓을 수 있는 단계입니다. 대량으로 해놓으셨다면 드실 만큼만 빼놓고 식힌 뒤 냉장보관해주세요.",
                "덜어낸 수프를 끓이고 1인분 기준으로 숏파스타를 한줌, 완두콩을 반줌 넣어주세요.",
                "숏파스타가 다 익으면 서빙합니다."
            ],
            introduction: [
                "영미권 나라들의 소울 푸드, 치킨 누들 수프입니다.",
                "약이 없던 옛날에는 감기에 걸렸을 때 이걸 먹였다고 해요.",
                '추운 날 한 그릇 먹고 나가면 하루종일 든든하고 따스하게 지낼 수 있답니다.'
            ]
        },
        {
            type: 'recipe',
            id: '3',
            name: '마파두부',
            time: 15,
            difficulty: '중',
            tag: [],
            ingredients: ['두부', '두반장', '설탕', '간장', '후추', '고춧가루', '다짐육', '대파', '마늘', '맛술', '식용유', '고추기름'],
            contentimg: [
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg',
                'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg'
            ],
            img: 'https://static.myletter.net/20161104/dbcdced5-0731-473b-943d-439ae4655b86.jpg',
            content: [
                '두부를 원하는 크기로 잘라주세요. 원래는 연두부를 쓰지만 어떤 두부를 써도 괜찮습니다. 연두부를 쓴다면 끓는 물에 살짝 데쳐주세요.',
                '두반장과 설탕, 간장, 맛술을 섞어 양념장을 만들어둡니다. 고춧가루와 고추기름은 나중에 따로 넣을거예요.',
                '마늘은 곱게 다져주고 대파는 잘게 썰어주세요. 파의 일부는 나중에 장식으로 올릴 거니 따로 빼놓으세요.',
                '식용유를 넉넉히 넣고 파와 마늘을 넣어 중불에서 볶아 향을 내주세요.',
                '다짐육을 팬에 넣고 볶아주세요. 취향에 따라 돼지고기나 소고기 아무거나 써도 됩니다. 굽다보면 물이 나오면서 자글자글 끓는 소리로 바뀌었다가 노릇노릇해지면서 다시 굽는 소리로 바뀔 거예요.',
                '굽는 소리가 다시 나기 시작하면 만들어둔 양념장을 넣고 물을 반컵 넣고 끓여주세요.',
                '고춧가루를 넣어 농도를 생각하시는 것보다 아주 약간 더 꾸덕하게 맞춰주세요.',
                '두부와 고추기름을 넣고, 두부가 으깨지지 않게 살살 섞어주세요. 연두부를 쓰실 경우 특히 조심해주세요!',
                '밥 위에 끼얹고 잘게 썰어둔 파를 위에 올려 서빙합니다.'
            ],
            introduction: [
                '마파두부는 사천 지방에 기원을 둔 중국 요리로',
                '매운맛과 단맛이 적절한 수준에서 조화를 이루고 있는 요리입니다.',
            ]
        },
        {
            type: 'recipe',
            id: '4',
            name: '문어 샐러드',
            time: 40,
            difficulty: '하',
            tag: [],
            ingredients: ['문어', '로메인', '양상추', '올리브유', '소금', '후추', '레몬즙'],
            img: 'https://www.msc.org/images/default-source/msc-english/content-banner/recipes-500x500/octopus-salad.jpg?sfvrsn=cb01186d_0',
            contentimg: [
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
                'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935',
            ],
            content: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque maxime incidunt soluta aspernatur est ad temporibus id, animi praesentium quasi ut esse, totam dolore alias repellendus qui perferendis voluptatibus.",
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '11',
            name: '두부김치',
            time: 15,
            difficulty: '하',
            tag: [],
            ingredients: ['두부', '김치', '돼지고기', '참기름', '참깨'],
            img: 'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
            contentimg: [
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
                'http://static.myletter.net/20190215/6c2bb790-35c7-47f3-9a48-44f695a2a2fb.jpg',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem ipsam cupiditate repudiandae molestiae, nam nisi. Accusamus, et. Laboriosam quos minus culpa a ducimus nihil, eum incidunt earum dignissimos excepturi!"
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '12',
            name: '두부조림',
            time: 30,
            difficulty: '하',
            tag: [],
            ingredients: ['두부', '간장', '고춧가루', '참깨'],
            img: 'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
            contentimg: [
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
                'https://t1.daumcdn.net/cfile/tistory/99ED593F5CFEF77E05',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam eaque sint quisquam, voluptatibus inventore libero cumque reprehenderit alias eum exercitationem incidunt obcaecati corporis. Fuga nulla voluptatum deserunt ipsa nemo!"
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '13',
            name: '두부부침',
            time: 10,
            difficulty: '하',
            tag: [],
            ingredients: ['두부', '식용유', '간장'],
            img: 'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
            contentimg: [
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
                'http://img.mimint.co.kr/food/bbs/2016/8/25/20160825134456_peilczhz.jpg',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '14',
            name: '만두밥',
            time: 5,
            difficulty: '하',
            tag: [],
            ingredients: ['만두', '밥', '간장', '참기름'],
            img: 'https://t1.daumcdn.net/cfile/tistory/9975173C5B9B84BE08',
            contentimg: [
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
                'http://recipe.ezmember.co.kr/cache/recipe/2015/06/24/018a27cf4a6ce57d8c2a17951451b192.jpg',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '15',
            name: '눈꽃만두',
            time: 15,
            difficulty: '중',
            tag: [],
            ingredients: ['만두','전분','식용유','간장','고춧가루'],
            img: 'http://mblogthumb1.phinf.naver.net/20160827_196/menzel_1472224222702GjX65_JPEG/image_3995489801472222408921.jpg?type=w800',
            contentimg: [
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
                'http://recipe1.ezmember.co.kr/cache/recipe/2015/07/12/b46a1015bf806bbeba77861355e38d861.jpg',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        },
        {
            type: 'recipe',
            id: '16',
            name: '알리오 올리오',
            time: 15,
            difficulty: '중상',
            tag: ['마늘', '파스타'],
            ingredients: ['마늘','고추','올리브유','롱파스타', '파슬리'],
            img: 'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
            contentimg: [
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
                'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F07%2Fe77cb676a9408994b6b07b673d46d17bdbf8814c.jpeg',
            ],
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus expedita natus nam sequi consequuntur cum a ullam, officia blanditiis provident inventore tempora aut eligendi illum consequatur praesentium quidem voluptas!",
            ],
            introduction: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consectetur aliquam sapiente quos tenetur ipsa placeat doloribus, quidem reiciendis quaerat quam itaque culpa tempora ducimus quibusdam non, deserunt odio enim."
            ]
        }
    ],
    product: [
        {
            type: 'product',
            id: '1',
            name: '풀무원 소가 부침두부 300g',
            price: 1500,
            stock: 15,
            company: '풀무원',
            madein: '국내산',
            img: 'http://img.danawa.com/prod_img/500000/075/132/img/6132075_1.jpg?shrink=500:500&_v=20180813140819',
            tag: '두부',
            content: [
                "풀무원에서 출시한 가성비 좋은 두부입니다.",
                "노릇노릇하게 구워 간장에 찍어 드시거나",
                "고기와 김치를 볶아 곁들여 드셔보세요."
            ]
        },
        {
            type: 'product',
            id: '2',
            name: '비비고 왕교자',
            price: 8500,
            stock: 15,
            company: 'CJ',
            madein: '국내산',
            img: 'http://img.danawa.com/prod_img/500000/346/069/img/3069346_1.jpg?shrink=500:500&_v=20190628122535',
            tag: '만두',
            content: [
                "냉동만두계를 평정한 그 제품입니다.",
                "쪄먹어도 맛있고 구워먹어도 맛있고 튀겨먹어도 맛있습니다.",
                "얼려먹는건 잘 모르겠네요."
            ]
        },
        {
            type: 'product',
            id: '3',
            name: '하인즈 베이크드 빈즈',
            price: 1800,
            stock: 15,
            company: 'Heinz',
            madein: '영국',
            img: 'http://img.danawa.com/prod_img/500000/994/744/img/4744994_1.jpg?shrink=500:500&_v=20161212162320',
            tag: '',
            content: [
                "베이크드 빈즈의 본고장 영국의 브랜드인",
                "하인즈의 베이크드 빈즈입니다.",
                "부대찌개나 영국식 아침식사에 꼭 필요하며",
                "타코미트의 양을 늘릴 때 쓰기도 좋습니다.",
                "보고있나 빕스?"
            ]
        },
        {
            type: 'product',
            id: '4',
            name: '오뚜기카레 순한맛',
            price: 2000,
            stock: 15,
            company: '오뚜기',
            madein: '국내산',
            img: 'http://image.lottemart.com/lim/static_root/images/prodimg/88010/8801045010113_1_640.jpg',
            tag: '카레',
            content: [
                "한국식 카레의 정석과도 같은 오뚜기 카레입니다.",
                "넣고싶은 것을 넣고싶은 만큼 듬뿍 넣고",
                "넣기 싫은건 하나도 넣지 않은",
                "어른의 카레를 즐겨보세요.",
                "이제 아무도 여러분에게 야채를 먹으라고 하지 않으니까요."
            ]
        },
        {
            type: 'product',
            id: '5',
            name: '데체코 스파게티 500g',
            price: 2500,
            stock: 15,
            company: 'De Cecco',
            madein: '이탈리아',
            img: 'http://image.auction.co.kr/itemimage/df/75/f2/df75f2686.jpg',
            tag: '롱파스타',
            content: [
                "이탈리아의 대중적인 파스타 브랜드",
                "데체코의 스파게티입니다.",
                "스파게티는 가벼운 느낌의 해산물 베이스 소스나",
                "크림, 혹은 오일 베이스 파스타에 잘 어울립니다.",
                "파스타가 스파게티만 있는 게 아니니 새로운 종류의 면들도 시도해보세요!"
            ]
        },
        {
            type: 'product',
            id: '6',
            name: '필라델피아 크림치즈',
            price: 3300,
            stock: 15,
            company: 'Craft Foods',
            madein: '호주',
            img: 'http://img.danawa.com/prod_img/500000/118/530/img/2530118_1.jpg?shrink=500:500&_v=20171218101317',
            tag: '크림치즈',
            content: [
                "한번쯤은 접해보셨을 가장 대중적인 크림치즈입니다.",
                "빵에 발라드시거나, 딸기잼 등을 함께 발라 드셔보세요."
            ]
        },
        {
            type: 'product',
            id: '7',
            name: '안티코 파르미지아노 레지아노',
            price: 6000,
            stock: 15,
            company: 'Antico',
            madein: '이탈리아',
            img: 'http://cheesemall.co.kr/web/product/big/MCHa4018S001.jpg',
            tag: '파마산',
            content: [
                "많은 유럽 요리에 반드시 필요한 파마산 치즈입니다.",
                "갈려서 판매되는 제품과는 차원이 다른 향을 자랑하니",
                "치즈가 필요한 요리가 있다면 꼭 한번 직접 갈아서 써보세요.",
                "훨씬 간지난답니다."
            ]
        },
        {
            type: 'product',
            id: '8',
            name: '루지에 푸아그라 블록',
            price: 30000,
            stock: 15,
            company: 'Rougie',
            madein: '프랑스',
            img: 'https://cheesequeen.co.kr/data/goods/201607/568_01125210view.jpg',
            tag: '푸아그라',
            content: [
                "거위 간으로 만든 푸아그라의 한 조각입니다.",
                "존나 비싸지만 존나 맛있습니다."
            ]
        },
        {
            type: 'product',
            id: '9',
            name: '이금기 중화 두반장 226g',
            price: 2520,
            stock: 15,
            company: '이금기 식품유한공사',
            madein: '중국',
            img: 'http://img.danawa.com/prod_img/500000/541/062/img/4062541_1.jpg?shrink=500:500&_v=20180321121434',
            tag: '두반장',
            content: [
                "중국 요리에 쓰이는 양념입니다.",
                "쓰이는 곳은 많이 없지만, 대체재가 없습니다."
            ]
        },
        {
            type: 'product',
            id: '10',
            name: 'CJ 하선정 국산다진마늘 250g',
            price: 7940,
            stock: 15,
            company: 'CJ',
            madein: '국내산',
            img: 'http://item.ssgcdn.com/94/05/93/item/0000007930594_i1_1200.jpg',
            tag: '마늘',
            content: [
                "한식에서는 절대 빠질 수 없는 향신료인 마늘입니다.",
                "마늘은 다지기가 귀찮은 편이니 다진마늘을 쓰는 것도 매우 현명한 선택입니다."
            ]
        },
        {
            type: 'product',
            id: '11',
            name: '미림 500g',
            price: 5000,
            stock: 15,
            company: '롯데',
            madein: '국내산',
            img: 'https://fresh.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/8/8/8801056023690.jpg',
            tag: '푸아그라',
            content: [
                "맛술의 대명사격인 미림입니다.",
                "고기의 잡내를 없애고 아주 미세한 감칠맛을 더합니다."
            ]
        },
        {
            type: 'product',
            id: '12',
            name: '풀무원 국산콩 연두부 250g',
            price: 1000,
            stock: 15,
            company: '풀무원',
            madein: '국내산',
            img: 'http://item.ssgcdn.com/45/52/61/item/0000006615245_i1_1200.jpg',
            tag: '두부',
            content: [
                "풀무원에서 만든 연두부입니다.",
                "차가운 상태로 양념간장을 위에 부어 퍼먹기만 해도 맛있습니다."
            ]
        }
    ]
}

const recipeAndProductReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            if(state.favorite.indexOf(action.id)===-1){
                alert('즐겨찾기에 등록되었습니다.')
                return {
                    ...state,
                    favorite: [...state.favorite, action.id]
                }
            } else {
                alert('이미 즐겨찾기에 등록되어있는 레시피입니다.')
                return state
            }
        case 'REMOVE_FROM_FAVORITE':
            return{
                ...state,
                favorite: state.favorite.filter(item => item.id!==action.id)
            }
        default: return state
    }
}

export default recipeAndProductReducer