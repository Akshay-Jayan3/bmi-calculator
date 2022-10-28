
import { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState("");
  const [message,setMessage]=useState('');
  const [messageColor,setmessagecolor]=useState("")
  

  const Handleheight=(event)=>{
    let heightinmeter=(event.target.value)*0.01;
    setHeight(heightinmeter);
  }
  

  let calc =(event)=>{
    event.preventDefault();
    
    if (weight===0 && height===0){
      alert("Enter a valid weight and height");
    }
    else{
      
      let bmiCalc=(weight/(height*height));
      setBmi(bmiCalc.toFixed(2));
      
      
        
      
     
    

    }
     
  
  }


  const Reload=()=>{
    window.location.reload();

  }
  const HandleResult=()=>{
    if (bmi<=18.4){
      setMessage("Underweight");
      setmessagecolor("blue");

    }
    else if(bmi>=18.5 && bmi<=24.9){
      setMessage("Normal");
      setmessagecolor("green");
    }
    else if(bmi>=25.0 && bmi<=39.9){
      setMessage("Overweight");
      setmessagecolor("orange")
    }
    else if(bmi>40){
      setMessage("Obese");
      setmessagecolor("red")
    }else{
      setMessage('')
    }
    

  }
  

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          <h1 id="heading">BMI CALCULATOR</h1>
         
        <form onSubmit={calc}>
        <label>
          Enter your weight:
          <input type="text"  required onChange={(event)=>{setWeight(event.target.value)}} />
        </label>
        <br/>
        <label>
          Enter your height:
          <input type="text"  required onChange={Handleheight} />
        </label>
        <br/>
        <button className="btn" type="submit">Submit</button>
        <br/>
        <button className="btn" onClick={HandleResult}>Result</button>
        <br/>
        <button className="btn" onClick={Reload} type="submit">Refresh</button>
        
       
       
      </form>

        </div>
        <div className='bottom'>
          <h2>Your BMI :{bmi}</h2>
          <div className='message'>
            <h1 style={{color:messageColor}}>{message}</h1>
            
            
          </div>



        </div>
      </div>
      
    </div>
  );
}

export default App;
