// import 파일 
import * as React from 'react'
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// api
import { productApi } from "./api/api.ts";
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

//commonts
import { Productts } from './ts/common.ts'



function App() {
  const [content, setCont] = useState<Productts[] | null>(null); //api 데이터 변수
  const [sharedState, setSharedState] = useState<number[]>([]); //장바구니라우터에게 전달할 pk Array
  const [mbstatus, setMbstatus] = useState("nomember");

  //비동기 데이터 전달 함수 1회호출하기 위해 상위컴포넌트로 이동, props로 slice 처리 후 전달
  const fetchDataAndSetState = async (): Promise<void> => {
    try {
      const response = await productApi("product"); // 2가지경우에 응대하는 각 식이 존재해야해
      if (response instanceof Error) {
        throw response; // 에러가 발생한 경우 다시 throw하여 catch 블록으로 전달
      }
      if (Array.isArray(response.data)) {
        setCont([...response.data]);
      } else {
        // 만약 response.data가 배열이 아니라면 예외 처리
        throw new Error('Response data is not an array');
      }


    } catch (error) {
      console.log(error);
    }
  };

  const updateSharedState = (childliftupvalue: number[]) => {
    setSharedState(childliftupvalue);
    //실행식은 자식 컴포넌트에서 자식컴포넌트들이 공유해야하는 상태변수를 부모가 관리
    //실행식이 useEffect에 없는 이유임
  };

  useEffect(() => {
    //상품 api 딱 한번만 실행
    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    console.log("ts interface 복붙용", content)
    console.log("ts interface 복붙용", sharedState)
  }, [content, sharedState])


  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={
          <>
            <LoginP
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></LoginP>
          </>
        }>
        </Route>
      </Routes>



      <Routes>
        <Route path="/registration" element={
          <>
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
            <RegistrationP></RegistrationP>
            <Footer></Footer>
          </>
        }>
        </Route>
      </Routes>


      <Routes>
        <Route path="/sale_p" element={
          <>
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
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
              updateSharedState={updateSharedState}
            />
            <Footer></Footer>
          </>
        }>
        </Route>

        <Route path="/best_p" element={
          <>
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
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
              updateSharedState={updateSharedState}
              sharedState={sharedState}
            />
            <Footer></Footer>
          </>
        }></Route>

        <Route path="/shop" element={
          <>
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
            <ShopP
              conmargin="200px"
              h4class="text-center"
            />
            <Footer></Footer>
          </>
        }></Route>


        <Route path="/cart" element={
          <>
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
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
            <Hd
              sharedState={sharedState}
              mbstatus={mbstatus}
              setMbstatus={setMbstatus}
            ></Hd>
            <div id='slidebanner'>
              <Mainvideo ></Mainvideo>
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