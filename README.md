# Recipe mall 

## 프로젝트 설명

검색창에 요리의 이름을 검색하면 레시피가 출력되고 그 하단에 그 레시피에 들어가는 모든 재료들의 리스트가 함께 출력돼 그자리에서 바로바로 필요한 재료들을 장바구니에 넣어서 주문할 수 있게 하고, 반대의 경우도 마찬가지로 일반적인 식자재 쇼핑몰처럼 상품들 또한 검색 및 조회할 수 있으며, 상품을 조회할 시 상품 정보 하단에 해당 상품을 이용한 요리의 레시피 링크가 뜨게 만들어 상품과 레시피 검색을 자유롭게 할 수 있는 식자재 쇼핑몰 웹페이지

관리자 계정 id: admin@asdf.com / pw: admin123
사용자 계정 id: test1@asdf.com / pw: asdf123

사용한 기술 : firebase, react, redux-thunk

## 각 컴포넌트 설명
```
├── App.js                              # 앱 루트 
├── components                          # 컴포넌트 폴더 (주요 기능별로 묶음)
│   ├── auth                            # 사용자 계정 관리
│   │   ├── Join.js
│   │   ├── JoinCompleted.js
│   │   ├── Login.js
│   │   ├── Member.js                   # 관리자 계정에서 사용자 계정 관리
│   │   ├── MemberDetail.js             # 관리자 계정에서 사용자 계정 상세조회
│   │   ├── MemberSummary.js            # Member.js의 사용자 리스트의 각 항목
│   │   ├── MyPage.js
│   │   ├── MyPageButton.js             # MyPage.js에서 사용자 정보 수정, 장바구니 등으로 이동하는 버튼
│   │   └── Profile.js                  # 사용자 본인의 계정 정보 확인 및 수정
│   ├── cart
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── OrderCompleted.js
│   │   └── ProductSummary.js           # 장바구니의 상품 리스트의 각 항목
│   ├── customerService
│   │   ├── AdminQnA.js
│   │   ├── AdminShipping.js
│   │   ├── AdminShippingDetail.js
│   │   ├── CreateQnA.js
│   │   ├── QnA.js
│   │   ├── QnADetail.js
│   │   ├── ReplyQnA.js
│   │   ├── Shipping.js
│   │   ├── ShippingDetail.js
│   │   └── ShippingSummary.js          # Shipping.js의 배송 리스트의 각 항목
│   ├── layout
│   │   ├── AdminLinks.js               # Navbar 우상단에 들어가는 관리자 전용 링크
│   │   ├── Favorite.js                 # 사용자가 지정한 레시피 즐겨찾기 목록
│   │   ├── Footer.js
│   │   ├── List.js                     # 상품/레시피 검색결과 페이지
│   │   ├── Main.js
│   │   ├── MemberSearch.js
│   │   ├── Navbar.js
│   │   ├── QnASearch.js
│   │   ├── Search.js                   # 상품/레시피 검색창 (layout의 다른 ~~search도 모두 마찬가지로 검색창)
│   │   ├── ShippingSearch.js
│   │   ├── SignedInLinks.js            # Navbar 우상단에 들어가는 사용자 전용 링크
│   │   └── SignedOutLinks.js           # Navbar 우상단에 들어가는 비 로그인 전용 링크
│   ├── products
│   │   ├── CreateProduct.js
│   │   ├── ProductButton.js            # List.js의 검색결과 리스트에 뜨는 상품 버튼
│   │   ├── ProductDetail.js
│   │   └── UpdateProduct.js
│   └── recipes
│       ├── CreateRecipe.js
│       ├── RecipeButton.js             # List.js에서 즐겨찾기에 등록되어있을 경우의 레시피 버튼
│       ├── RecipeButtonAlt.js          # List.js에서 즐겨찾기에 등록되지 않은 경우의 레시피 버튼
│       ├── RecipeContent.js            # 레시피 추가/수정시 레시피의 각 단계를 작성하는 컴포넌트
│       ├── RecipeDetail.js
│       └── UpdateRecipe.js
├── config
│   └── fbconfig.js
├── contexts
│   └── recipeContext.js
├── index.css
├── index.js
├── serviceWorker.js
└── store
    ├── actions
    │   ├── authActions.js
    │   ├── cartActions.js
    │   ├── productActions.js
    │   ├── qnaActions.js
    │   └── recipeActions.js
    └── reducers
        ├── authReducer.js
        ├── cartReducer.js
        ├── productReducer.js
        ├── qnaReducer.js
        ├── recipeReducer.js
        └── rootReducer.js
```
