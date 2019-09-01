const initState = {
    auth: [
        {uid:'k4mt38vtIXWp8xCA9oPqnxmfsGB2', email:'test123@naver.com', pwd:'1q2w3e'},
        {uid:'rxmaaU4fQpTHHOHJpmzDwJXP6rE3', email:'test1234@naver.com', pwd:'1q2w3e'}
    ],
    user: [
        {
            uid:'k4mt38vtIXWp8xCA9oPqnxmfsGB2',
            address:'서울시 은평구 증산로 123',
            building:'민들레아파트 101호',
            contact:'01001010101',
            name:'김낑깡',
            postnum:'12345',
            status:'휴면',
            cart: [
                {id:1, qty:2},
                {id:2, qty:1}
            ],
            order: [
                {id:1, qty:2},
                {id:2, qty:1}
            ]
        },
        {
            uid:'rxmaaU4fQpTHHOHJpmzDwJXP6rE3',
            address:'bbb',
            building:'bbbbb',
            contact:'01057230571',
            name:'김나나',
            postnum:'09876',
            status:'일반',
            cart: [
                {id:3, qty:1},
                {id:4, qty:5}
            ],
            order: [
                {id:3, qty:1},
                {id:4, qty:5}
            ]
        }
    ]
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state    
        default:
            return state
    }
}

export default authReducer