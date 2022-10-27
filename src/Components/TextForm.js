import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperClick = () => {
        // let upperCasedText = text.toUpperCase();
        setText(text.toUpperCase())
    }

    const handleLowerClick = () => {
        // let upperCasedText = text.toUpperCase();
        setText(text.toLowerCase())
    }

    const handleXSpaceClick = () => {
        let newText = text.replace(/\s\s+/g, ' ');;
        // if(text.split(" ").includes(" ")===true){
        // }
        console.log(newText);
        setText(newText);
    }

    const handleClear = () => {
        setText("");
    }

    const handleCopy = () => {
        var text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // text = "new text"; //Incorrect way of setting new text
    // setText("new text"); //Correct Way of Setting new text when using hooks

    return (
        <div className="m-3 my-4 pb-0 textils-form">
            <div className="d-flex justify-content-center">
                <div className="item-1">
                    {/* Text Playground */}
                    <div className='container d-flex my-2 headingBox'>
                        <h2 id='heading' className='mx-2' mb-2>{props.heading}</h2>
                        <h2>Playground</h2>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control outputBox" placeholder="Enter Your Text Here" value={text} onChange={handleOnChange} id="textBox"></textarea>
                    </div>

                    {/* Img-Buttons */}
                    <div className={`d-flex justify-content-center p-2 py-2 rounded div-${props.icon}`}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3665/3665909.png" onClick={handleUpperClick} alt="" height="40" className={`shad-${props.icon} mx-2`} width="40"/>

                        <img src="https://cdn-icons-png.flaticon.com/512/3665/3665887.png" onClick={handleLowerClick} alt="" height="40" className={`shad-${props.icon} mx-2`} width="40" />

                        <img src="https://img.icons8.com/color/48/000000/scissors.png" className={`shad-${props.icon} mx-2`} onClick={handleXSpaceClick} alt="" height="40" width="40" />

                        <img src="https://cdn-icons-png.flaticon.com/512/2015/2015014.png" alt="" height="40" width="40" className={`shad-${props.icon} mx-2`} onClick={handleClear} />

                        <img src="https://img.icons8.com/3d-fluency/344/documents.png" onClick={handleCopy} alt="" height="40" width="40" className={`shad-${props.icon} mx-2`} border border-light />
                    </div>
                </div>

                <div className="item-2">
                    {/* Preview Window */}
                    <div className="container my-2 ">
                        <h2 className='mb-2 mx-4'>Preview Window</h2>
                        <div className="container-fluid outputBox m-3 p-2 mx-1" id='outBox'>
                            {text.length === 0 ?"Type something above to preview it here": text}
                        </div>
                    </div>

                    {/* Summary of Text Entered */}
                    <div className={`container my-2 mx-3 rounded div-${props.icon}`} id="text_summary">
                        {text.split(/\s+/).length} word(s) and {text.length} characters
                    </div>

                </div>
            </div>
        </div>
    )
}
