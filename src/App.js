import React from 'react';
import './index.css';
import { useSelector,useDispatch } from 'react-redux';
import { IncNum, DecNum } from './actions/index';



function App() {
  const state = useSelector(state => state.changeNum);
  const dispatch =useDispatch();
  
  return (
   <>
   <center>
   <div className='container'>
    <button className='quantity_minus'onClick={()=> dispatch(DecNum()) } ><span>-</span></button>
    <input type='text' name='quantity' className='quantity_input' value={state}/>
    <button className='quantity_plus' onClick={()=> dispatch(IncNum()) }><span>+</span></button>
   </div>
   </center>
   </>
  );
}

export default App;
