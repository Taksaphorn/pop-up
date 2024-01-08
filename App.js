import React from 'react';
import './App.css'
import Document from "./Document.js"
import 'reactjs-popup/dist/index.css';

function App() {
    return (
    <div className="App">
        <div  className='center'>
        <button id="show-request">ขอเปลี่ยน PEA No.</button>
        </div>
        <div className='popup'>
            <div className='close-btn'>&times;</div>
            <div className='form'>
                <h2>แบบฟอร์มขอเปลี่ยน PEA No.</h2> 
            <div className='form-element'>
                <label for="name">ชื่อ-นามสกุล</label>
                <input type='text' id='name'></input>
            </div>
            <div className='form-element'>
                <label for="email">Email</label>
                <input type='text' id='email'></input>
            </div>
            <div className='form-element'> 
                <label for="number">PEA No.ที่จะขอเปลี่ยน</label>
                <input type='text' id='PEANo'></input>
            </div>
            <div className='form-footer'>
                <button>ส่งข้อมูล</button>
            </div>
            </div>
        </div>
    </div>
);
}

export default App;
