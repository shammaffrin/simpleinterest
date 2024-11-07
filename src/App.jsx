import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle ,setprinciple]= useState("")
  const [rate ,setrate] =useState("")
  const [year ,setyear] = useState("")
  const [isprinciple , setisprinciple]=useState(true)
  const [israte , setisrate]=useState(true)
  const [isyear , setisyear]=useState(true)
  const [interest  ,setinterest]=useState(0)

  const validate =(e)=>{
    /* console.log(e.target); */
    const {name , value} = e.target
    console.log(name);
    console.log(value);
    //match(regExp) -return array when values matches with regular expression else return null
    // console.log(value.match('^[0-9]*$'));
    if(!!value.match('^[0-9]*$')){
      if(name=='principle'){
        setprinciple(value)
        setisprinciple(true)
      }
      else if(name=='rate'){
        setrate(value)
        setisrate(true)
      }
      else{
        setyear(value)
        setisyear(true)
      }
    }
    else{
      if(name=='principle'){
        setprinciple(value)
        setisprinciple(false)
      }
      else if(name=='rate'){
        setrate(value)
        setisrate(false)
      }
      else{
        setyear(value)
        setisyear(false)
      }
    }
    
    
  }

  const handlereset =()=>{
    setprinciple("")
    setrate("")
    setyear("")
    setisprinciple(true)
    setisrate(true)
    setisyear(true)
    setinterest(0)
    }

  const calculate=()=>{
    setinterest((principle*rate*year)/100)
  }  

  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'130vh', width:'100%'}}>
          <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
            <h1>Simple Interest App</h1>
            <p>Calculate your simple interest Easily</p>

            <div className='bg-warning p-3 d-flex justify-content-center align-items-center rounded mt-4 flex-column' style={{height:'150px'}}>
              <h1>₹ {interest}</h1>
              <p>Total Simple Interest</p>
          </div>
          <div className="my-3">
              <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="Principle amount" variant="outlined" onChange={(e)=>validate(e)}/>
              {isprinciple==false && <p className='text-danger'>*Ivalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of interest(%)" variant="outlined" onChange={(e)=>validate(e)} />
          {israte==false && <p className='text-danger'>*Ivalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={year} name='year' label="Year (yr)" variant="outlined" onChange={(e)=>validate(e)} />
          {isyear==false && <p className='text-danger'>*Ivalid Input</p>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button disabled={isprinciple && israte && isyear ? false :true} variant="contained" style={{width:'190px'}} color='success' className='p-3' onClick={calculate}>CALCULATE</Button>
          <Button variant="outlined" style={{width:'190px'}} className='p-3' onClick={handlereset} >Reset</Button>

          </div>
          </div>
      </div>
    </>
  )
}

export default App
