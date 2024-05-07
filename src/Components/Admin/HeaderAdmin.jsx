import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaList } from "react-icons/fa6";

const HeaderAdmin = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [nameLinks, setNameLinks] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
        const response = await axios.get('http://localhost:5000/api/users/profile', config);
        setName(response.data.name);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData();
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLinksOpen(false)
  };

  const toggleLinks = () => {
    setLinksOpen(!linksOpen);
  };

  const nameLinkHandle = () => {
    setNameLinks(!nameLinks)
  }

  const logoutHandler = () => {
    localStorage.removeItem('token');
  }


  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-32 mx-auto p-3'>
        <Link to='/HomeAdmin'>
          <h1 className='font-bold text-2xl text-black'>TKAU</h1>
        </Link>



        <div className='hidden sm:flex justify-center space-x-4'>
          <Link className='text-gray-800 hover:text-gray-600' to='/HomeAdmin'>Home</Link>
          <Link className='text-gray-800 hover:text-gray-600' to='/about'>About</Link>
          <Link className='text-gray-800 hover:text-gray-600' to='/contact'>Contact</Link>
        </div>



        <ul className='flex gap-4 items-center'>
          {name ? (
            <>
              <h1 className='relative text-1xl text-center font-bold text-black py-1 '>
                <span className='border-b-4 border-solid border-blue-500'>
                  Hi,<span className='font-semibold'> {name}</span>
                </span>
              </h1>

              <div className='relative'>
                {/* <button className='btn bg-info text-white' onClick={toggleMenu}>
                <span className='font-bold'>Hi, </span>{name}
              </button> */}
                {/* <div className={`absolute top-full right-0 bg-white shadow-md rounded-lg z-10  ${menuOpen ? 'block' : 'hidden'}`}>
              </div> */}
                <div className=''>
                  <FaList onClick={toggleLinks} className='text-gray-800 cursor-pointer  ' />
                  <ul className={`absolute p-1 flex flex-col bg-white shadow-md rounded-lg -right-px mt-3 z-1 ${linksOpen ? 'block' : 'hidden'} `}>
                    <Link className='text-gray-800  hover:text-gray-600 p-2 hover:bg-gray-200- sm:hidden' to='/about'>About</Link>
                    <Link className='text-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200 sm:hidden' to='/HomeAdmin'>Home</Link>
                    <Link className='text-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200 sm:hidden' to='/contact'>Contact</Link>
                    <Link className='ext-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/Allusers'>
                      All Users
                    </Link>
                    <Link className='ext-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/AllMessage'>
                      All Messages
                    </Link>
                    <Link className='ext-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/'>
                      Home User
                    </Link>
                    <Link className='ext-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/api/users/profile'>
                      Profile
                    </Link>
                    <Link className='ext-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/login' onClick={logoutHandler}>
                      Logout
                    </Link>
                  </ul>
                </div>
                {/* <ul className={`absolute p-1 flex flex-col bg-white shadow-md rounded-lg -right-px mt-32 mr-12 z-1 ${linksOpen ? 'block' : 'hidden'} mx:hidden`}>
                    <Link className='text-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/api/users/profile'>
                      Profile
                    </Link>
                    <Link className='text-gray-800 hover:text-gray-600 p-2 hover:bg-gray-200' to='/login' onClick={logoutHandler}>
                      Logout
                    </Link>
                  </ul> */}

              </div>
            </>
          ) : (
            <div className='flex space-x-3 justify-end'>
              <Link className='text-white hover:text-gray-300' to='/register'>Create Account</Link>
              <Link className='text-white hover:text-gray-300' to='/login'>Log in</Link>
            </div>

          )}


        </ul>
      </div>
    </div>
  );
}

export default HeaderAdmin;
