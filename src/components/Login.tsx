import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm, } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
//import type { FieldValues } from 'react-hook-form'

type LoginData = {
    userName: string,
    password: string
}

function Login() {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext)

    const testData = {
        username: 'test',
        password: 'test',
      }; 

    const authenticateUser = (username, password) => {
        if (username === testData.username && password === testData.password) { 
          const userData = {
            username,
            password,
          };
          const expirationTime = new Date(new Date().getTime() + 60000);
          Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
          
          return true;
        }
        return false;
    };

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        //getValues,
    } = useForm()

    const onSubmit =async (data: LoginData) => {
        const {userName, password} = data
        const isAuthenticated = authenticateUser(userName, password);
        if (isAuthenticated) {
          setAuth({userName, password})
          navigate('/');
        } else {
          // Show error message or perform other actions for failed authentication
        }
        reset()
    }

  return (
    <>
    <h1>Login</h1>
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
        <input 
            {...register("userName", {
                required: "User Name is required"
            })}
            type="text"
            required
            placeholder='User Name'
            className='px-4 py-2'
        />
        {errors.userName && (
            <p className='text-red-500'>{`${errors.userName.message}`}</p>
        )}

        <input 
            {...register("password", {
                required: "Password is required"
            })}
            type="password"
            required
            placeholder='Password'
            className='px-4 py-2'
        />
        {errors.password && (
            <p className='text-red-500'>{`${errors.password.message}`}</p>
        )}

        <button 
            disabled={isSubmitting}
            type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login