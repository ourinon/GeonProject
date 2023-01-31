import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./style.css";
import book1 from "src/assets/images/book1.jpeg";
import book2 from "src/assets/images/book2.png";
import book3 from "src/assets/images/book3.jpeg";
import book4 from "src/assets/images/book4.jpeg";
import book5 from "src/assets/images/book5.jpeg";
import book6 from "src/assets/images/book6.jpeg";

function BookList() {
    let [a, b] = useState(["책1", "책2", "책3", "책4", "책5", "책6"]);
    return (
        <div>
            <div className='list-top'>
                <form>
                    <select name='serachFrm'>
                        <option value='none'>=== 선택 ===</option>
                        <option value='#'>추천순</option>
                        <option value='#'>가격순</option>
                        <option value='#'>ㄱㄴㄷ순</option>
                    </select>
                </form>
            </div>
            <div className='container'>
                <div className='sub-menu'>
                    <ul>
                        <h2 className='title'>0~3세</h2>
                        <li>
                            <a href='#'>전체</a>
                        </li>
                        <li>
                            <a href='#'>그림책</a>
                        </li>
                        <li>
                            <a href='#'>동화책</a>
                        </li>
                        <li>
                            <a href='#'>브로마이드</a>
                        </li>
                        <li>
                            <a href='#'>학습</a>
                        </li>
                        <li>
                            <a href='#'>토이사운드북</a>
                        </li>
                        <li>
                            <a href='#'>해외도서</a>
                        </li>
                    </ul>
                </div>

                <div className='list-wrapper'>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book1} />
                                </a>
                            </div>
                            <div className='book-name'>{a[0]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book2} />
                                </a>
                            </div>
                            <div className='book-name'>{a[1]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book3} />
                                </a>
                            </div>
                            <div className='book-name'>{a[2]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book4} />
                                </a>
                            </div>
                            <div className='book-name'>{a[3]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book5} />
                                </a>
                            </div>
                            <div className='book-name'>{a[4]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                    <div className='list-container'>
                        <div className='list-img'>
                            <div className='imgtle'>
                                <a href='https://www.woongjinbooks.com/pc/product/000000000005033614?CERTIFICATION_NO=&PRD_CTG_IDX=3680'>
                                    <img className='book-img' src={book6} />
                                </a>
                            </div>
                            <div className='book-name'>{a[5]}</div>
                            <div className='price'>
                                <b>13,320</b>원
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookList;
