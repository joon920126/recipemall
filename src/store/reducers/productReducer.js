// const initState = {
//     product: [
//         {
//             id: '1',
//             name: '풀무원 소가 부침두부 300g',
//             price: 1500,
//             stock: 15,
//             company: '풀무원',
//             madein: '국내산',
//             img: 'http://img.danawa.com/prod_img/500000/075/132/img/6132075_1.jpg?shrink=500:500&_v=20180813140819',
//             tag: '두부',
//             content: [
//                 "풀무원에서 출시한 가성비 좋은 두부입니다.",
//                 "노릇노릇하게 구워 간장에 찍어 드시거나",
//                 "고기와 김치를 볶아 곁들여 드셔보세요."
//             ]
//         },
//         {
//             id: '2',
//             name: '비비고 왕교자',
//             price: 8500,
//             stock: 15,
//             company: 'CJ',
//             madein: '국내산',
//             img: 'http://img.danawa.com/prod_img/500000/346/069/img/3069346_1.jpg?shrink=500:500&_v=20190628122535',
//             tag: '만두',
//             content: [
//                 "냉동만두계를 평정한 그 제품입니다.",
//                 "쪄먹어도 맛있고 구워먹어도 맛있고 튀겨먹어도 맛있습니다.",
//                 "얼려먹는건 잘 모르겠네요."
//             ]
//         },
//         {
//             id: '3',
//             name: '하인즈 베이크드 빈즈',
//             price: 1800,
//             stock: 15,
//             company: 'Heinz',
//             madein: '영국',
//             img: 'http://img.danawa.com/prod_img/500000/994/744/img/4744994_1.jpg?shrink=500:500&_v=20161212162320',
//             tag: '',
//             content: [
//                 "베이크드 빈즈의 본고장 영국의 브랜드인",
//                 "하인즈의 베이크드 빈즈입니다.",
//                 "부대찌개나 영국식 아침식사에 꼭 필요하며",
//                 "타코미트의 양을 늘릴 때 쓰기도 좋습니다.",
//                 "보고있나 빕스?"
//             ]
//         },
//         {
//             id: '4',
//             name: '오뚜기카레 순한맛',
//             price: 2000,
//             stock: 15,
//             company: '오뚜기',
//             madein: '국내산',
//             img: 'http://image.lottemart.com/lim/static_root/images/prodimg/88010/8801045010113_1_640.jpg',
//             tag: '카레',
//             content: [
//                 "한국식 카레의 정석과도 같은 오뚜기 카레입니다.",
//                 "넣고싶은 것을 넣고싶은 만큼 듬뿍 넣고",
//                 "넣기 싫은건 하나도 넣지 않은",
//                 "어른의 카레를 즐겨보세요.",
//                 "이제 아무도 여러분에게 야채를 먹으라고 하지 않으니까요."
//             ]
//         },
//         {
//             id: '5',
//             name: '데체코 스파게티 500g',
//             price: 2500,
//             stock: 15,
//             company: 'De Cecco',
//             madein: '이탈리아',
//             img: 'http://image.auction.co.kr/itemimage/df/75/f2/df75f2686.jpg',
//             tag: '롱파스타',
//             content: [
//                 "이탈리아의 대중적인 파스타 브랜드",
//                 "데체코의 스파게티입니다.",
//                 "스파게티는 가벼운 느낌의 해산물 베이스 소스나",
//                 "크림, 혹은 오일 베이스 파스타에 잘 어울립니다.",
//                 "파스타가 스파게티만 있는 게 아니니 새로운 종류의 면들도 시도해보세요!"
//             ]
//         },
//         {
//             id: '6',
//             name: '필라델피아 크림치즈',
//             price: 3300,
//             stock: 15,
//             company: 'Craft Foods',
//             madein: '호주',
//             img: 'http://img.danawa.com/prod_img/500000/118/530/img/2530118_1.jpg?shrink=500:500&_v=20171218101317',
//             tag: '크림치즈',
//             content: [
//                 "한번쯤은 접해보셨을 가장 대중적인 크림치즈입니다.",
//                 "빵에 발라드시거나, 딸기잼 등을 함께 발라 드셔보세요."
//             ]
//         },
//         {
//             id: '7',
//             name: '안티코 파르미지아노 레지아노',
//             price: 6000,
//             stock: 15,
//             company: 'Antico',
//             madein: '이탈리아',
//             img: 'http://cheesemall.co.kr/web/product/big/MCHa4018S001.jpg',
//             tag: '파마산',
//             content: [
//                 "많은 유럽 요리에 반드시 필요한 파마산 치즈입니다.",
//                 "갈려서 판매되는 제품과는 차원이 다른 향을 자랑하니",
//                 "치즈가 필요한 요리가 있다면 꼭 한번 직접 갈아서 써보세요.",
//                 "훨씬 간지난답니다."
//             ]
//         },
//         {
//             id: '8',
//             name: '루지에 푸아그라 블록',
//             price: 30000,
//             stock: 15,
//             company: 'Rougie',
//             madein: '프랑스',
//             img: 'https://cheesequeen.co.kr/data/goods/201607/568_01125210view.jpg',
//             tag: '푸아그라',
//             content: [
//                 "거위 간으로 만든 푸아그라의 한 조각입니다.",
//                 "존나 비싸지만 존나 맛있습니다."
//             ]
//         },
//         {
//             id: '9',
//             name: '이금기 중화 두반장 226g',
//             price: 2520,
//             stock: 15,
//             company: '이금기 식품유한공사',
//             madein: '중국',
//             img: 'http://img.danawa.com/prod_img/500000/541/062/img/4062541_1.jpg?shrink=500:500&_v=20180321121434',
//             tag: '두반장',
//             content: [
//                 "중국 요리에 쓰이는 양념입니다.",
//                 "쓰이는 곳은 많이 없지만, 대체재가 없습니다."
//             ]
//         },
//         {
//             id: '10',
//             name: 'CJ 하선정 국산다진마늘 250g',
//             price: 7940,
//             stock: 15,
//             company: 'CJ',
//             madein: '국내산',
//             img: 'http://item.ssgcdn.com/94/05/93/item/0000007930594_i1_1200.jpg',
//             tag: '마늘',
//             content: [
//                 "한식에서는 절대 빠질 수 없는 향신료인 마늘입니다.",
//                 "마늘은 다지기가 귀찮은 편이니 다진마늘을 쓰는 것도 매우 현명한 선택입니다."
//             ]
//         },
//         {
//             id: '11',
//             name: '미림 500g',
//             price: 5000,
//             stock: 15,
//             company: '롯데',
//             madein: '국내산',
//             img: 'https://fresh.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/8/8/8801056023690.jpg',
//             tag: '푸아그라',
//             content: [
//                 "맛술의 대명사격인 미림입니다.",
//                 "고기의 잡내를 없애고 아주 미세한 감칠맛을 더합니다."
//             ]
//         },
//         {
//             id: '12',
//             name: '풀무원 국산콩 연두부 250g',
//             price: 1000,
//             stock: 15,
//             company: '풀무원',
//             madein: '국내산',
//             img: 'http://item.ssgcdn.com/45/52/61/item/0000006615245_i1_1200.jpg',
//             tag: '두부',
//             content: [
//                 "풀무원에서 만든 연두부입니다.",
//                 "차가운 상태로 양념간장을 위에 부어 퍼먹기만 해도 맛있습니다."
//             ]
//         }
//     ]
// }

// const productReducer = (state=initState, action) => {
//     return state
// }

// export default productReducer