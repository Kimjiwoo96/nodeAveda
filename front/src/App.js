// import 파일 
import { Routes, Route } from "react-router-dom";
// component파일 
import Hd from "./component/layout/Hd";
import Mainvideo from "./component/banner/Videobanner"
import Main_sale from "./pages/Main_sale";
import Mainbanner from "./component/banner/Imgbanner"
import Main_best from "./pages/Main_best";
import Main_service from "./pages/Main_service";
import Form from "./component/main/Form";
import Footer from "./component/layout/Footer";
import Shop_p from "./pages/Shop_p";
import Cart_p from "./pages/Cart_p";

// css
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Hd></Hd>

      <Routes>
        <Route path="/sale_p" element={
          <>
            <Main_sale
              slice={16}
              texts={{
                text: "할인상품",
                add: null,
              }}
              myclassStyle={{
                divclass: null,
                h4class: "text-center",
                conmargin: "200px"
              }}
            />
          </>
        }>
        </Route>

        <Route path="/best_p" element={
          <>
            <Main_sale
              slice={16}
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
          </>
        }></Route>


        <Route path="/shop" element={
          <>
            <Shop_p
              conmargin="200px"
              h4class="text-center"
            />
          </>
        }></Route>




        <Route path="/cart" element={
          <>
            <Cart_p
              texts={{
                text: "CART",
              }}
              myclassStyle={{
                h4class: "text-center",
                conmargin: "200px"
              }}
            />
          </>
        }>
        </Route>


        <Route path="/" element={
          <>
            <div id='slidebanner'>
              <Mainvideo className="position-relative"></Mainvideo>
            </div>
            <Main_sale
              slice={8}

              texts={{
                text: "할인상품",
                add: <span style={{ color: "000f22" }}>더보기</span>
              }}
              myclassStyle={{
                divclass: "d-flex justify-content-between align-items-center",
                h4class: null,
                conmargin: "0px"
              }}

            ></Main_sale>
            <Mainbanner className="position-relative"></Mainbanner>
            <Main_best></Main_best>
            <Main_service></Main_service>
            <Form></Form>
          </>
        }></Route>
      </Routes>



      <Footer></Footer>

    </div >
  );
}

export default App;

