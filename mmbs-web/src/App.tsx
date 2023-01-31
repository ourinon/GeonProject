import React, { useState } from "react";
import "./App.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layouts/header";
import Main from "./layouts/main";
import Navigation from "./layouts/navigation";
import Footer from "./layouts/footer";
import axios from "axios";
import SingIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import DtlPage from "./pages/dtlPage";
import UserUpdate from "./pages/UserUpdate";
import BookList from "./pages/bookList";

// component : Main Component //+
// descriptiong : 전체 루트 컴포넌트 //
function App() {
    const [connection, setConnection] = useState<string>("");

    const connectionTest = () => {
        axios
            .get("http://localhost:4080/")
            .then((response) => {
                setConnection(response.data);
            })
            .catch((error) => {
                setConnection(error.message);
            });
    };

    useEffect(() => {
        connectionTest();
    }, []);

    const [tmp, setTmp] = useState<number>(0);
    return (
        <>
            <Header />
            <Navigation />
            <Routes>
                {/* // component : Main 화면 */}
                <Route path='/' element={<Main />} />
                {/* // component : 회원가입 화면 */}
                <Route path='/dtlpage' element={<DtlPage />} />
                <Route path='/signIn' element={<SingIn />} />
                {/* // component : 로그인 화면 */}
                <Route path='/signup' element={<SingUp />} />
                {/* // component : 회원정보수정 화면 */}
                <Route path='/userUpdate' element={<UserUpdate />} />
                {/* // component : 도서 목록 화면 */}
                <Route path='/bookList' element={<BookList />} />
            </Routes>

            {/* // component : 마이페이지 화면 */}
            {/* // component : ?? 화면 */}
            <DtlPage />
            <Footer />
        </>
    );
}

export default App;
