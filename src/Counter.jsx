import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, reset, incrementByAmount } from './redux/counterSlice'

const Counter = () => {
  const [amount,setAmount]= useState(0)
  // useSelector hook
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const handleIncrementAmount =()=>{
    if(amount){
      // dispatch action
      // + number convertion otherwise it will be concatinated
      dispatch(incrementByAmount(+amount))

    }else{
      alert("Please enter valid amount")
    }
  }
  return (
    <div className='bg-dark' style={{height:'100vh'}}>
      <h1 className='text-light text-center mt-3'>Counter App</h1>
        <div className=' d-flex align-items-center  justify-content-center' style={{width:'100%', height:'80%'}}>
        
        <div className='border rounded mt-3  text-center' style={{width:'75%', height:'60%'}}>
          <div className='row'>
          <div className='col-4 mt-4 align-items-center'>
          <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
          </div>
          <div className='col-4 mt-4 align-items-center'>
            <h1 className='text-light' style={{fontSize:'100px'}}>{count}</h1>
          <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
          </div>
          <div className='col-4 mt-4 align-items-center' >
          <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
          </div>
          </div>
          <div className='row'>
            <div className='col-8 mt-4 align-items-center'>
            <input onChange={e=>{setAmount(e.target.value)}} type='text' className='form-control' placeholder='Enter the count' />
            </div>
        <div className='col-4 mt-4 align-items-center' >
          
          <button onClick={handleIncrementAmount} className='btn btn-success'>INCREMENT BY AMOUNT</button>
          </div>
          {/* <button className='col-4 btn-info'>INCREMENT BY AMOUNT

          </button> */}

        </div>

        </div>
        
        </div>
    </div>
  )
}

export default Counter