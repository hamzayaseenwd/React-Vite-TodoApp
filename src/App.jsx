import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)


  const [user_data, setUserData] = useState({
    // username:'',
    // email:'',
    // password:''
  });


  const userDataHandle = (val, key) => {
    // console.log("val:", val);
    // console.log("key:", key);
    const obj = { ...user_data };

    obj[key] = val;

    setUserData(obj);
  };



  return (
    <>
      <div>
        <div>
        <h1 className="text-4xl text-center mt-4 mb-4 font-bold underline">TODO APP</h1>

<div className='flex flex-wrap justify-center'>
  <Input
    id="Title"
    placeholder="Title"
    type="text"
    onChangeHandle={userDataHandle} />
  <Input
    id="Description"
    placeholder="Description"
    type="text"
    onChangeHandle={userDataHandle} />

  <button className="btn btn-outline mt-5 m-2">Add </button>
  <button className="btn btn-outline  mt-5 m-2">Delete All </button>

</div>
        </div>
      </div>





    </>
  )
}

export default App
