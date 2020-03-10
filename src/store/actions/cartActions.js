import {reduceStock} from './productActions'

export const addToCart = (product, quantity) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //파이어스토어, 파이어베이스 트리거
        const firebase = getFirebase()
        const firestore = getFirestore()
        //스토어의 user문서에서 현재 사용자의 아이디의 이름을 가진 문서를 뽑아낸 뒤
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then(doc => {
            //빈 배열 newCart 생성
            //만약 cart에 product의 아이디를 가진 오브젝트가 있다
            //console.log(product, quantity)
            if(doc.data().cart.filter(item=>item.id===product.id).length!==0){
                //newCart는 cart를 복사한 뒤 그 오브젝트의 수를 두번째 인자만큼 늘린다
                const newCart = doc.data().cart.map(item=>item.id===product.id? {id:item.id, qty:item.qty+quantity}:item)
                return newCart
            //만약 그렇지 않다면
            }else{
                //newCart는 cart를 복사한 뒤 product의 아이디를 가지고 수량은 두번째 인자만큼 가진 오브젝트를 새로 생성한다
                const newCart = [
                    ...doc.data().cart,
                    {id:product.id, qty:quantity}
                ]
                return newCart
            }
        }).then(newCart => {
            //newCart를 cart로 입력하기
            userDoc.update({cart:newCart})
        //에러 캐치하기
        }).then(() => {
            dispatch({type:'ADD_TO_CART_SUCCESS', product})
        }).catch(err => {
            dispatch({type:'ADD_TO_CART_ERROR'}, err)
        })
    }
}

export const removeOneFromCart = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //파이어스토어, 파이어베이스 메소드 발동
        const firebase = getFirebase()
        const firestore = getFirestore()
        //스토어의 user 문서에서 현재 사용자 아이디의 이름을 가진 문서를 뽑아낸 뒤
        firestore.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc)=>{
            //빈 배열 newCart 생성 후 cart 배열 복사하기
            //newCart에 변경사항 적용하기
            const newCart = doc.data().cart.map(item => item.id===product.id? {id:item.id, qty:item.qty-1}:item)
            return newCart
        }).then((newCart)=>{
            //newCart를 firestore에 update하기
            firestore.collection('users').doc(firebase.auth().currentUser.uid).update({
                cart:newCart
            })
        }).then(() => {
            dispatch({type:'REMOVE_ONE_FROM_CART_SUCCESS', product})
        }).catch((err)=>{
            dispatch({type:'REMOVE_ONE_FROM_CART_ERROR'}, err)
        })
    }
}

export const removeFromCart = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firestore.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc)=>{
            const newCart = doc.data().cart.filter(item => item.id!==product.id)
            return newCart
        }).then((newCart)=>{
            firestore.collection('users').doc(firebase.auth().currentUser.uid).update({
                cart:newCart
            })
        }).then(() => {
            dispatch({type:'REMOVE_FROM_CART_SUCCESS', product})
        })
        .catch((err)=>{
            dispatch({type:'REMOVE_FROM_CART_ERROR'}, err)
        })
    }
}

export const order = (order) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const user = firebase.auth().currentUser.uid
        firestore.collection('shipping').doc(Date.now().toString()).set({
            userid: user,
            name: order.name,
            phone: order.phone,
            zonecode: order.zonecode,
            address: order.address,
            address2: order.address2,
            cart: order.cart,
            message: order.message,
            deliver: 0,
            orderedAt: Date()
        }).then(() => {
            firestore.collection('users').doc(user).update({
                cart: []
            })
            order.cart.map(item => dispatch(reduceStock(item.id, item.qty)))
        }).then(() => {
            dispatch({type:'ORDER_SUCCESS', order})
        })
        .catch((err) => {
            dispatch({type:'ORDER_ERROR'}, err)
        })
    }
}

export const changeDeliver = (order, delivered) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('shipping').doc(order).update({
            deliver: delivered
        })
    }
}