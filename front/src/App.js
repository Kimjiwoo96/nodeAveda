// import 파일 
import * as React from 'react'
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// api
import { productApi } from "./api/product";
// component파일 
import Hd from "./component/layout/Hd";
import Mainvideo from "./component/banner/Videobanner"
import MainSale from "./pages/Main_sale";
import Mainbanner from "./component/banner/Imgbanner"
import MainBest from "./pages/Main_best";
import MainService from "./pages/Main_service";
import Form from "./component/main/Form";
import Footer from "./component/layout/Footer";
import ShopP from "./pages/Shop_p";
import CartP from "./pages/Cart_p";
import LoginP from "./pages/Login_p";
import RegistrationP from "./pages/Registration_p";

// css
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [content, setCont] = useState(null); //api 데이터 변수
  const [sharedState, setSharedState] = useState([]); //장바구니라우터에게 전달할 pk Array

  //비동기 데이터 전달 함수 1회호출하기 위해 상위컴포넌트로 이동, props로 slice 처리 후 전달
  const fetchDataAndSetState = async () => {
    try {
      const response = await productApi("product");
      setCont([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSharedState = (childliftupvalue) => {
    setSharedState(childliftupvalue);
    //실행식은 자식 컴포넌트에서 자식컴포넌트들이 공유해야하는 상태변수를 부모가 관리
    //실행식이 useEffect에 없는 이유임
  };

  useEffect(() => {
    //상품 api 딱 한번만 실행
    fetchDataAndSetState();
  }, []);


  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={
          <>
            <LoginP></LoginP>
          </>
        }>
        </Route>
      </Routes>



      <Routes>
        <Route path="/registration" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <RegistrationP></RegistrationP>
            <Footer></Footer>
          </>
        }>
        </Route>
      </Routes>


      <Routes>
        <Route path="/sale_p" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <MainSale
              content={content && content.slice(0, 16)}
              texts={{
                text: "할인상품",
                add: null,
              }}
              myclassStyle={{
                divclass: null,
                h4class: "text-center",
                conmargin: "200px"
              }}
              sharedState={sharedState}
            />
            <Footer></Footer>
          </>
        }>
        </Route>

        <Route path="/best_p" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <MainSale
              content={content && content.slice(0, 16)}
              texts={{
                text: "인기상품",
                add: null,
              }}
              myclassStyle={{
                divclass: null,
                h4class: "text-center",
                conmargin: "200px"
              }}
            />
            <Footer></Footer>
          </>
        }></Route>

        <Route path="/shop" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <ShopP
              conmargin="200px"
              h4class="text-center"
            />
            <Footer></Footer>
          </>
        }></Route>


        <Route path="/cart" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <CartP
              sharedState={sharedState}  //장바구니 라우터 pk전달 장바구니에서 삭제했을때 메인의 장바구니 표시에 영향을 주어야 해서 반드시 전달해주기
              setSharedState={setSharedState}
              content={content && content}
              texts={{
                text: "CART",
              }}
              myclassStyle={{
                h4class: "text-center",
                conmargin: "200px"
              }}
            />
            <Footer></Footer>
          </>
        }>
        </Route>


        <Route path="/" element={
          <>
            <Hd sharedState={sharedState}></Hd>
            <div id='slidebanner'>
              <Mainvideo className="position-relative"></Mainvideo>
            </div>
            <MainSale
              sharedState={sharedState}
              updateSharedState={updateSharedState} // 하위컴포넌트에 상위컴포넌트 상태변수관리 메소드전달
              content={content && content.slice(0, 8)} //비동기 처리 리턴은 항상 조심하기 // 비동기처리 전달값이 생성하고 나서 slice해야 오류없음

              texts={{
                text: "할인상품",
                add: <span style={{ color: "000f22" }}>더보기</span>
              }}
              myclassStyle={{
                divclass: "d-flex justify-content-between align-items-center",
                h4class: null,
                conmargin: "0px"
              }}
            ></MainSale>


            <Mainbanner className="position-relative"></Mainbanner>
            <MainBest></MainBest>
            <MainService></MainService>
            <Form></Form>
            <Footer></Footer>
          </>
        }></Route>
      </Routes>



    </div >
  );
}

export default App;