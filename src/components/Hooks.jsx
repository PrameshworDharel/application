
// const Hooks = () => {
//     const [count, setCount] =useState(20);

//     const handleClick = () => {
//         setCount((count) => count + 1);//1
//     };
//     console.log(count);

//     useEffect(() => {
//         setCount(15);

//     }, []);

//   return(
//     <div className='mb-40'>
//         <h1 className='font-medium text-5xl mb-4'>useState</h1>
//         <p>The value of count is {count}</p>
//         <button class="bg-black text-white rounded-sm ml-10 mt-10" onClick={handleClick}>Increase Count</button>
//     </div>

import React, { useState } from 'react';

function Hooks() {
  const [num, setNum] = useState(100);
  const [inputNumber, setInputNumber] = useState(0);

  const increaseByTwo = () => {
    setNum(num + 2);
  };

  const decreaseByTwo = () => {
    setNum(num - 2);
  };

  const addInputNumber = () => {
    setNum(num + parseInt(inputNumber));
    setInputNumber(0);
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div>
      <p class="text-center mt-10 ">Current number: {num}</p>
      <div class="flex gap-10 justify-center mt-10 ">
      <button class="shadow-md rounded-sm" onClick={increaseByTwo}>Increase by 2</button>
      <button class="shadow-md rounded-sm" onClick={decreaseByTwo}>Decrease by 2</button>
      <input  type="number" class=" shadow-md" value={inputNumber} onChange={handleInputChange} />
      <button class="shadow-md rounded-sm" onClick={addInputNumber}>Add Input Number</button>
     </div> 
 </div>
 
    
  );
}
export default Hooks;