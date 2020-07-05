import React, {useState, useContext, useEffect} from 'react'
import RecipeContent from './RecipeContent'
import {RecipeContext} from '../../contexts/recipeContext'
import {useDispatch} from 'react-redux'
import {updateRecipe, createRecipe} from '../../store/actions/recipeActions'
import {useHistory} from 'react-router-dom'
import firebase from '../../config/fbconfig'

const UpdateRecipe = (props) => {
    const [steps, setSteps] = useState(1)
    const {recipe, setRecipe} = useContext(RecipeContext)
    const [oldRecipe, setOldRecipe] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        firebase.firestore().collection('recipeAndProduct').doc(props.match.params.id).get().then((doc) => {
            const docRecipe = doc.data()
            setOldRecipe({
                id: doc.id,
                name: docRecipe.name,
                time: docRecipe.time,
                ingredients: docRecipe.ingredients,
                difficulty: docRecipe.difficulty,
                img: docRecipe.img,
                imgUrl: docRecipe.img,
                imgName: docRecipe.imgName,
                steps: docRecipe.content.slice(),
                stepImg: docRecipe.contentImg.slice(),
                stepImgUrl: docRecipe.contentImg.slice(),
                stepImgName: docRecipe.contentImgName.slice(),
                introduction: docRecipe.introduction,
                tag: docRecipe.tag,
            })
            setRecipe({
                id: doc.id,
                name: docRecipe.name,
                time: docRecipe.time,
                ingredients: docRecipe.ingredients,
                difficulty: docRecipe.difficulty,
                img: docRecipe.img,
                imgUrl: docRecipe.img,
                imgName: docRecipe.imgName,
                steps: docRecipe.content,
                stepImg: docRecipe.contentImg.slice(),
                stepImgUrl: docRecipe.contentImg.slice(),
                stepImgName: docRecipe.contentImgName.slice(),
                introduction: docRecipe.introduction,
                tag: docRecipe.tag,
            })
            setSteps(docRecipe.content.length)
        })
    }, [])
    // 2. 가져온 데이터를 recipe context에 넣기
    // 3. 문서에 맞게 값 배치 (value = '~~~~')
    // 4. 문서에 있는 단계 수만큼 recipeContent 띄우고(map) props로 값 집어넣기
    // 5. recipeContent에서 props로 받아온 값 배치
    // 6. 이미지 띄우기
    // 7. submit 누르면 스토리지에서 사진 제거하고 재업로드
    // 8. 파이어스토어 문서 갱신

    const handleChange = (e) => {
        setRecipe({...recipe, [e.target.id]: e.target.value})
    }

    const handleFileInput = (e) => {
        setRecipe({
            ...recipe,
            img: e.target.files[0],
            imgUrl: URL.createObjectURL(e.target.files[0]),
            imgName: e.target.files[0].name,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(recipe)
        dispatch(updateRecipe(recipe, oldRecipe))
        history.goBack()
    }

    const handleArrayChange = (e) => {
        setRecipe({...recipe,
            // 정규식으로 띄어쓰기 상관없게 만들기
            [e.target.id]: e.target.value.split(', ')})
    }

    const addContent = (e) => {
        e.preventDefault()
        setSteps(steps+1)
    }

    return (
        <div className='container Site-content'>
            <form onSubmit={handleSubmit}>
                <h4 className='grey-text text-darken-1'>레시피 등록</h4>
                <div className='row valign-wrapper'>
                    <div className='col s12 l6'>
                        {recipe.imgUrl? <img className='responsive-img' src={recipe.imgUrl} alt=''/> : <h5 className='center grey-text text-lighten-1'>이미지 없음</h5>}
                    </div>
                    <div className='col s12 l6'>
                        <div className='input-field'>
                            <label htmlFor='id' className='active'>레시피 고유번호는 변경할 수 없습니다.</label>
                            <input type='text' id='id' disabled value={recipe.id||' '} onChange={handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='name' className='active'>레시피명</label>
                            <input type='text' id='name' value={recipe.name||' '} onChange={handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='time' className='active'>시간</label>
                            <input type='number' id='time' value={recipe.time||0} onChange={handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='ingredients' className='active'>재료</label>
                            <input type='text' id='ingredients' value={recipe.ingredients.join(', ')||' '} onChange={handleArrayChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='difficulty' className='active'>난이도</label>
                            <input type='text' id='difficulty' value={recipe.difficulty||' '} onChange={handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='tag' className='active'>태그</label>
                            <input type='text' id='tag' value={recipe.tag.join(', ')||' '} onChange={handleArrayChange}/>
                        </div>
                        <div className='file-field input-field'>
                            <div className='btn brown lighten-2'>
                                <span>이미지 업로드</span>
                                <input type='file' onChange={handleFileInput}/>
                            </div>
                            <div className='file-path-wrapper'>
                                <input type='text' defaultValue={recipe.imgName} className='file-path wrapper'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='input-field'>
                    <label htmlFor='introduction' className='active'>상품 설명</label>
                    <textarea id='introduction' onChange={handleChange} value={recipe.introduction||' '} className='materialize-textarea'></textarea>
                </div>
                <div className='input-field'>
                    {Array.apply(0, Array(steps)).map((step, idx) => <RecipeContent step={idx} key={idx}/>)}
                </div>
                <div className='input-field center'>
                    <button className='btn brown lighten-2' style={{marginRight: '4px'}} onClick={addContent}>내용 추가</button>
                    <button className='btn brown lighten-2'>레시피 수정</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRecipe
