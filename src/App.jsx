import React from 'react'
import './App.css'
import * as math from 'mathjs'
function App() {
  var i;
 var [q,c]=React.useState(0);
 var [checkit,ischecked]=React.useState(true);
 const reff=React.useRef(null);
 const reffff=React.useRef(null);
 const  colour=React.useRef(null);
 const  colourd=React.useRef(null);
 const  drop=React.useRef(null);
//  const  content=React.useRef(null);
 const  colourb=React.useRef([]);
 const setref=(i,e)=>{
colourb.current[i]=e;
 }
//  const r=React.useRef(null);
function dropp()
{
  drop.current.style.display='none';
}
function dropbutton()
{
  drop.current.style.display='block';
}
function colorr(event){
var colourr=event.target.textContent;
if(colourr=='Blue'){
colour.current.style.background='#74b0ff';
for( i=0;i<18;i++){
colourb.current[i].style.background='#2522f8';
colourb.current[i].style.color='white';

}
colourd.current.style.background='#729ad6';
colourd.current.style.color='black';
}
if(colourr=='Red'){
colour.current.style.background='#7D0A0A';
colourd.current.style.background='#A73121';
colourd.current.style.color='white';

for( i=0;i<18;i++){
colourb.current[i].style.background='#BF3131';
colourb.current[i].style.color='white';
}
}
if(colourr=='Pink')
{
  colour.current.style.background='#FF90BC';
for( i=0;i<18;i++){
colourb.current[i].style.background='#FFC0D9';
colourb.current[i].style.color='black';
}
colourd.current.style.background='#F875AA';
colourd.current.style.color='black';
}
}
 function ccc(){
  
  if(checkit){
    reff.current.style.background='#ccc';
  reffff.current.style.transform='translate(42px)';
  document.body.style.background='#092635';
  }
else{

reff.current.style.background='yellow';
reffff.current.style.transform='translate(0px)';
document.body.style.background='#fff3f3';
}
ischecked(prev=>!prev);
 }
//  const ischecked=()=>{
//   var checkk=document.getElementById('c');
//  var m=document.getElementsClassName('m');
//  var s=document.getElementsClassName('s');
//  if(checkk.checked)
//  {
// m.style.display="none";
//  }
//  else{
//    s.style.display="none";
//  }
//  }
 React.useEffect(() => {
 
  const handleKeyPress = (event) => {
    
    var wwe=document.getElementById("display");
 wwe.scrollLeft=wwe.clientWidth+100;
 
    const key=event.key;
    if(key>=0 && key<10||key=="*"||key=="/"||key=="+"||key=="-"||key=="Backspace"||key=="="||key=="Enter"){
    var krsna=document.getElementById(key);
    if(key=="Backspace")
    {
      c(prev=>{ 
        if (prev==0||prev.length==1)
        return 0;
      else
      return prev.slice(0,-1);
      });
    }
   else if(key=="="||key=="Enter")
   { 
    let flag=0;
    c(prev=>{
     try{
      var w=String(math.evaluate(prev));
    return w;
     }
     catch(e){
      if(prev!=0){
      flag=1;
    //   if(flag==1)
    // alert("Enter valid expression");
return 0;
}

     }
    });
    
   }
    else
    {
    c(prev=>{ 
      if (prev==0)
      return krsna.textContent
    else
    return prev+krsna.textContent;
    })}
  }
  };
  
  // Add event listener when the component mounts
  document.addEventListener('keydown', handleKeyPress);

  // Remove event listener when the component unmounts
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}, []);
 const qq=(eventt)=>
 {  
  
  var e=eventt.target.textContent;
   if(e=="del")
   {
    c(prev=>{ 
      if (prev==0||prev.length==1)
      return 0
    else
    return prev.slice(0,-1);
    });
   }
   else if(e=="=")
   {
   let flag=0;
    c(prev=>{
      try{
        var t=String(math.evaluate(prev));
        return t;
      }
      catch (e){
        flag=1;
    //     if(flag==1)
    // alert("Enter valid expression");
        return 0;
      }
    });
    
   }
   else{
    c(prev=>{ 
      if (prev==0)
      return eventt.target.textContent
    else
    return prev+eventt.target.textContent;
    })}
  };
  const cccc={
      display: checkit?'none':'block',
      position: 'absolute',
      top:'0.4vh',
      // visibility:'hidden',
      fontSize:'5vh',
      
  };
  const ssss={
    display: checkit?'block':'none',
    
    position: 'absolute',
    top:'0.4vh',
    // visibility:'hidden',
    fontSize:'5vh',
    
};


  return (
    <> 
   <label className="slider" ref={reff}>
  <span className="slider-btn" ref={reffff} onClick={ccc} >
    <i className="fa fa-moon m" style={cccc} id="moon" ></i>
  <i className="fa fa-sun s" style={ssss}  id="sun" ></i>
  </span>
</label>
<div className="dropdown">
      <button className="dropdown-btn" onClick={dropbutton}>
        Change color
      </button>
        <div className="dropdown-content" ref={drop} onClick={dropp}>
          <div onClick={colorr}>Red</div>
          <div onClick={colorr}>Pink</div>
          <div onClick={colorr}>Blue</div>
        </div>
      </div>
      <div className="calculator" ref={colour}  >
        <div className="display" id="display" ref={colourd}>
<div className="digits" >
  {q}
</div>
        </div>
          <div className="buttons"   >
            <div className="row1" >
    <div className="kk" id="7" onClick={qq} ref={(element) => setref(0, element)}>
      7
    </div>
    <div className="ll" id="8" onClick={qq}ref={(element) => setref(1, element)}>
      8
    </div>
    <div className="mm" id="9" onClick={qq} ref={(element) => setref(2, element)}>
      9
    </div>
    <div className="nn" id="+" onClick={qq} ref={(element) => setref(3, element)}>
      +
    </div>
    <div className="oo" id="*" onClick={qq}ref={(element) => setref(4, element)}>
      *
    </div>
    <div className="poww powww" id="poww" onClick={qq}ref={(element) => setref(16, element)}>
    ^
    </div>
            </div>
            <div className="row2" >
            <div className="ff" id="4" onClick={qq} ref={(element) => setref(5, element)}>
      4
    </div>
    <div className="gg" id="5" onClick={qq}ref={(element) => setref(6, element)}>
      5
    </div>
    <div className="hh" id="6" onClick={qq}ref={(element) => setref(7, element)}>
      6
    </div>
    <div className="ii" id="-" onClick={qq}ref={(element) => setref(8, element)}>
      -
    </div>
    <div className="jj" id="/" onClick={qq}ref={(element) => setref(9, element)}>
      /
    </div>
    <div className="qrt" id="qrt" onClick={qq}ref={(element) => setref(17, element)}>
    √
    </div>
            </div>
            <div className="row3" >
            <div className="aa" id="1" onClick={qq}ref={(element) => setref(10, element)}>
      1
    </div>
    <div className="bb" id="2" onClick={qq}ref={(element) => setref(11, element)}>
      2
    </div>
    <div className="cc" id="3" onClick={qq}ref={(element) => setref(12, element)}>
      3
    </div>
    <div className="dd" id="0" onClick={qq}ref={(element) => setref(13, element)}>
      0
    </div>
    <div className="ee" id="=" onClick={qq}ref={(element) => setref(14, element)}>
      =
    </div>
    <div className="dell" id="Backspace" onClick={qq} ref={(element) => setref(15, element)}>
      del
    </div>
            </div>
          </div>
       
      </div>
    </>
  )
}

export default App
