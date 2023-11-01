import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


type LoginData = {
    userName: string,
    password: string
}

function LoginPage() {
    const navigate = useNavigate()
    const {auth, setAuth} = useContext(AuthContext)
    const [error, setError] = useState('')

    const testData = {
        username: import.meta.env.VITE_USER_NAME,
        password: import.meta.env.VITE_PASSWORD,
      }; 

    const authenticateUser = (username, password) => {
        if (username === testData.username && password.toString() === testData.password) { 
            setAuth({username, password})
            console.log(auth)
            navigate('/')
            
          
        } else {
            console.log("wrong credentials")
            setError("wrong credentials")
        }
    };

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
      
    } = useForm()

    const onSubmit =async (data: FieldValues) => {
        const {userName, password} = data
        authenticateUser(userName, password);
       
    }
  
console.log(error)
  return (
    <div className='text-slate-200 h-[100vh] flex justify-center items-center bg-cover' style={{'backgroundImage': 'url(../src/assets/login.jpg)'}}>
    <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
    {error && (
            <p className='text-red-600 text-xl text-center mb-3'>{error}</p>
        )}
    <h1 className='text-4xl font-bold text-center mb-6'>Login</h1>
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
        <div className='relative my-4'>
        <input 
            {...register("userName", {
                required: "User Name is required"
            })}
            type="text"
            required
            placeholder='User Name'
            className='transition ease-in-out delay-100 hover:scale-110 duration-300 block w-72 py-2.3 px-0 text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:text-white focus:border-sky-600 peer'
        />
        {errors.userName && (
            <p className='text-red-500'>{`${errors.userName.message}`}</p>
        )}
        </div>

        <div className='relative my-4'>
        <input 
            {...register("password", {
                required: "Password is required"
            })}
            type="password"
            required
            placeholder='Password'
            className='transition ease-in-out delay-100 hover:scale-110 duration-300 block w-72 py-2.3 px-0 text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:text-white focus:border-sky-600 peer'
        />
        {errors.password && (
            <p className='text-red-500'>{`${errors.password.message}`}</p>
        )}
        </div>

        <button 
            disabled={isSubmitting}
            type='submit'
            className='bg-sky-600 hover:bg-sky-700 font-bold m-1 mx-2 py-2 px-4 rounded-full'
        >
            Login
        </button>
    </form>
    </div>
    </div>
  )
}

export default LoginPage