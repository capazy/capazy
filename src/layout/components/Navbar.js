import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExamplesNavbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    // <div className=''>
    //   <div className='p-4 md:p-24 bg-white flex flex-wrap items-center md:py-0 py-2'>
    //     <div className='flex-1 flex justify-between items-center'>
    //       <span className='hidden md:block'>
    //         <Link to='/'>
    //           <img
    //             src='https://res.cloudinary.com/julianurrego/image/upload/v1588201125/Virtiual%20Oral%20Health/luwoyp2674azw5rfipqn.png'
    //             alt=''
    //             width='32'
    //             height='36'
    //             className='text-left'
    //           />
    //         </Link>
    //       </span>
    //       <span className='md:hidden'>
    //         <Link to='/'>
    //           <img
    //             src='https://res.cloudinary.com/julianurrego/image/upload/v1588201766/Virtiual%20Oral%20Health/n1695r9fmbxatg4dima1.png'
    //             alt=''
    //             width='220'
    //             height='240'
    //             className='text-left'
    //           />
    //         </Link>
    //       </span>
    //     </div>

    //     <div className='' id='menu'>
    //       <nav>
    //         <ul className='text-base text-gray-700 pt-4 lg:pt-0 mx-3'>
    //           <li>
    //             <Link
    //               className='lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2'
    //               to='/support'
    //             >
    //               Support
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
    <div className=' sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex items-end justify-between px-4 py-3 sm:p-0'>
        <div className=''>
          <Link to='/'>Capazy</Link>
        </div>

        <div className='sm:hidden'>
          <button
            onClick={() => setOpen(isOpen === false ? true : false)}
            type='button'
            className='block text-gray-900 hover:text-white focus:text-black pb-1'
          >
            <svg
              class='h-6 w-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
      <div className='md:hidden'>
        {isOpen && (
          <div className='px-2 pt-2 pb-4 sm:block sm:flex sm:p-0'>
            <Link
              to='/support'
              className='block sm:inline-block px-2 py-1 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400'
            >
              Support
            </Link>
          </div>
        )}
      </div>
      <div className='hidden md:block px-2 pt-2 pb-4 sm:block sm:flex sm:p-0'>
        <Link
          to='/support'
          className='block sm:inline-block px-2 py-1 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400'
        >
          Support
        </Link>
      </div>
    </div>
  );
}

export default ExamplesNavbar;
