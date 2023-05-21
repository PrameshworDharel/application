
import React,{useState} from'react';

const Login= () => {
 const [values,setValues]= 
 useState({
name: "",
email: "",
age: "",
password: "",
dateTime:"",
 });
//  const [gender, setGender] = useState('');
//   const [newsletter, setNewsletter] = useState(false);

 const handleChange =(e)=>{
  const { name,value} =e.target;
  setValues({
    ...values,
    [name]:value
  });
 };
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(values);
 

 }
  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 mt-10 shadow-md">
      <h1 className="text-2xl text-center font-bold mb-4"> Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input   type="text"
           name="name"
           value={values.name}
           onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input  type="email"
           name="email"
           value={values.email}
           onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"  />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age</label>
          <input type="number"
           name="age" 
           value={values.age}
           onChange={handleChange}
           className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input  type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
           className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          
          {/* <div className="mb-4">
        <label className="block mb-2">Gender:</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />{' '}
            Male
          </label>
          <label className="mr-2">
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />{' '}
            Female
          </label>
          <label className="mr-2">
            <input
              type="radio"
              value="other"
              checked={gender === 'other'}
              onChange={(e) => setGender(e.target.value)}
            />{' '}
            Other
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Newsletter:</label>
        <label className="mr-2">
          <input
            type="checkbox"checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />{' '}
          Subscribe to newsletter
        </label>
      </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Date & Time:
    </label>
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      type="datetime-local"
      id="dateTime"
      name="dateTime"
      value={values.dateTime}
      onChange={handleChange}
       />
  </div> 
        </div>
        <button type="submit" 
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
    
  );
  
};

export default Login;
