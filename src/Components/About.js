import React,{useState} from 'react'

export default function About(props) {

  const [darkStyle, setDarkStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleDarkStyle =()=>{
    if(darkStyle.color==='white'){
      setDarkStyle({
        color:'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode");
    }
    else{
      setDarkStyle({
        color:'white',
        backgroundColor: 'rgb(52, 70, 59)'
      })
      setBtnText("Enable Light Mode");
    }
  }
  
  
  
  return (
    <>
        <div className="bg-about container-about text-light mb-4">
            <span className="abtTitle">
                {props.aboutTitle}
                <hr />
                <h5 id='smallText'>A Text Utility Web App</h5>
       
            </span>
            <button className='getStartedBtn'>
                Get Started &gt;&gt;
            </button>
        </div>

        <div className="container border rounded my-4 p-3 text-center w-60" style={darkStyle}>
          <h2 className='mb-3'>ABOUT US</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus similique unde in facilis possimus nesciunt. Fuga consectetur illum porro aspernatur sequi excepturi aliquid, aliquam corporis repellat amet debitis quisquam. Repellat dolorum aliquam, dolore adipisci eveniet quo maiores reiciendis eligendi explicabo nihil. Commodi debitis ullam necessitatibus magnam magni omnis dolor labore?</p>
        </div>

        <div className="container">
          <button type="button" class="btn btn-primary" onClick={toggleDarkStyle}>{btnText}</button>
        </div>
    
    </>
  );
}
