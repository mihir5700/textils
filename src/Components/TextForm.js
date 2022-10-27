import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('');

    const handleUpperClick =()=>{
        // let upperCasedText = text.toUpperCase();
        setText(text.toUpperCase())
    }

    const handleLowerClick =()=>{
        // let upperCasedText = text.toUpperCase();
        setText(text.toLowerCase())
    }

    const handleXSpaceClick =()=>{
        let newText = text.replace(/\s\s+/g, ' ');;
        // if(text.split(" ").includes(" ")===true){
        // }
        console.log(newText);
        setText(newText);
    }

    const handleClear = ()=>{
        setText("");
    }

    const handleCopy = ()=>{
        var text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    } 

    // text = "new text"; //Incorrect way of setting new text
    // setText("new text"); //Correct Way of Setting new text when using hooks

    return (
        <div className="container my-4">
            <div className='container d-flex m-0 headingBox'>
                <h2 id='heading' className='mx-2'>{props.heading}</h2>
                <h2>Playground</h2>
            </div>

            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <div className="d-flex">

                <img src="https://cdn-icons-png.flaticon.com/512/3665/3665909.png" onClick={handleUpperClick} alt="" height="40" className={`shad-${props.icon} mx-2`} width="40"/>
                

                <img src="https://cdn-icons-png.flaticon.com/512/3665/3665887.png" onClick={handleLowerClick}alt="" height="40" className={`shad-${props.icon} mx-2`} width="40" />
                
                <img src="https://img.icons8.com/color/48/000000/scissors.png" className={`shad-${props.icon} mx-2`} onClick={handleXSpaceClick} alt="" height="40" width="40" />
                
                <img src="https://cdn-icons-png.flaticon.com/512/2015/2015014.png" alt="" height="35" width="35" className={`shad-${props.icon} mx-2`} onClick={handleClear}/>

                <img src="https://img.icons8.com/3d-fluency/344/documents.png" onClick={handleCopy} alt="" height="35" width="35" className={`shad-${props.icon} mx-2`} border border-light />
               
            </div>

            {/* Summary of Text Entered */}
            <div className="container my-4">
                <h2 className='mb-1'>Input Summary</h2>
                <span className="m-2" id="text_summary">
                    {text.split(/\s+/).length} word(s) | {text.length} characters
                </span>
            </div>

            <div className="container my-3">
                <h3 className='mb-2'>Preview Window</h3>
                <div className="container-fluid border outputBox" id='outBox'>
                    <div className="m-3" id='output_window'>
                        {
                        text.length===0?
                        "Type something above to preview it here"
                        :text}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
