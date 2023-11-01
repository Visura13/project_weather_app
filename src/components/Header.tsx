import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => { 
    Cookies.remove('auth');
    navigate('/login'); 
  };

  return (
    <nav className="bg-gray-800 border-slate-400 shadow backdrop-filter backdrop-blur-sm bg-opacity-30">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-10 w-auto" src="../src/assets/icon.png" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <h1 className='text-white text-3xl font-bold'>Weather Data</h1>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button 
            onClick={handleLogout}
            type='submit'
            className='bg-slate-50 hover:bg-slate-200 font-bold m-1 mx-2 py-2 px-4 rounded-full'
        >
            Logout
        </button>

      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
   
    </div>
  </div>
</nav>
  )
}

export default Header