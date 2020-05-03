import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <footer class='bg-white'>
        <div class='container mx-auto  px-8'>
          <div class='w-full flex flex-col md:flex-row py-6'>
            <div class='flex-1 mb-6'>
              <div className='-ml-8'>
                <img
                  src='https://res.cloudinary.com/dpnlmwgxh/image/upload/v1588518483/Main/link-blue_ry8izm.png'
                  alt=''
                  className='h-12 md:h-16 text-left '
                />
              </div>
            </div>

            <div class='flex-1'>
              <p class='uppercase text-gray-500 md:mb-6'>Web Developer</p>
              <ul class='list-reset mb-6'>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    FAQ
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Help
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class='flex-1'>
              <p class='uppercase text-gray-500 md:mb-6'>Marketing</p>
              <ul class='list-reset mb-6'>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Terms
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class='flex-1'>
              <p class='uppercase text-gray-500 md:mb-6'>Social</p>
              <ul class='list-reset mb-6'>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Facebook
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Linkedin
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class='flex-1'>
              <p class='uppercase text-gray-500 md:mb-6'>Finance</p>
              <ul class='list-reset mb-6'>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Official Blog
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    About Us
                  </a>
                </li>
                <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <a
                    href='#'
                    class='no-underline hover:underline text-gray-800 hover:text-orange-500'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
