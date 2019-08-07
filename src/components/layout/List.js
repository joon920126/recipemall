import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'

class List extends Component {

    state = {
        product: [
            {
                pid: 1,
                name: '소가 부침두부',
                price: 1500,
                company: '풀무원',
                madein: '국내산',
                img: 'http://img.danawa.com/prod_img/500000/075/132/img/6132075_1.jpg?shrink=500:500&_v=20180813140819'
            },
            {
                pid: 2,
                name: '비비고 왕교자',
                price: 8500,
                company: 'CJ',
                madein: '국내산',
                img: 'http://img.danawa.com/prod_img/500000/346/069/img/3069346_1.jpg?shrink=500:500&_v=20190628122535'
            },
            {
                pid: 3,
                name: '베이크드 빈즈',
                price: 1800,
                company: 'Heinz',
                madein: '영국',
                img: 'http://img.danawa.com/prod_img/500000/994/744/img/4744994_1.jpg?shrink=500:500&_v=20161212162320'
            },
            {
                pid: 4,
                name: '오뚜기카레 순한맛',
                price: 2000,
                company: '오뚜기',
                madein: '국내산',
                img: 'http://image.lottemart.com/lim/static_root/images/prodimg/88010/8801045010113_1_640.jpg'
            },
            {
                pid: 5,
                name: '스파게티 500g',
                price: 2500,
                company: 'De Cecco',
                madein: '이탈리아',
                img: 'http://image.auction.co.kr/itemimage/df/75/f2/df75f2686.jpg'
            },
            {
                pid: 6,
                name: '필라델피아 크림치즈',
                price: 3300,
                company: 'Craft Foods',
                madein: '호주',
                img: 'http://img.danawa.com/prod_img/500000/118/530/img/2530118_1.jpg?shrink=500:500&_v=20171218101317'
            },
            {
                pid: 7,
                name: '파르미지아노 레지아노',
                price: 6000,
                company: 'Antico',
                madein: '이탈리아',
                img: 'http://cheesemall.co.kr/web/product/big/MCHa4018S001.jpg'
            },
            {
                pid: 8,
                name: '푸아그라 블록',
                price: 30000,
                company: 'Rougie',
                madein: '프랑스',
                img: 'https://cheesequeen.co.kr/data/goods/201607/568_01125210view.jpg'
            }
        ],
        recipe: [
            {
                rid: 1,
                name: '연어 타르타르',
                time: 15,
                difficulty: '중',
                ingredients: [],
                img: 'http://heatherchristo.com/wp-content/uploads/2017/08/Salmon-Beet-and-Avocado-Tartar-with-Lemon-Vinaigrette-from-HeatherChristo.com_.jpg'
            },
            {
                rid: 2,
                name: '치킨 누들 수프',
                time: 20,
                difficulty: '하',
                ingredients: [],
                img: 'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg'
            },
            {
                rid: 3,
                name: '마파두부',
                time: 15,
                difficulty: '중',
                ingredients: [],
                img: 'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2011/10/mapo-tofu-hp.jpg'
            },
            {
                rid: 4,
                name: '문어 샐러드',
                time: 40,
                difficulty: '하',
                ingredients: [],
                img: 'http://irepo.primecp.com/2016/03/269664/recipe-24886_ExtraLarge1000_ID-1529935.jpg?v=1529935'
            }
        ]
    }
    render() {
        return (
            <div className="container">
            <Search/>
                <h5 className="center">'{}'검색결과</h5>
                <div className="row">
                    {this.state.recipe && this.state.recipe.map(recipe => {
                        return(
                                <RecipeButton recipe={recipe} key={recipe.rid}/>
                        )
                    })}
                    {this.state.product && this.state.product.map(product => {
                        return (
                                <ProductButton product={product} key={product.pid} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default List