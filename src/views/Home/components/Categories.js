import React from 'react';

const Categories = () => {
  // const expertise = [
  //   'Software, Programming and IT', //it
  //   'Computing and Mobile Phones', //it
  //   'Content and Writing', //content
  //   'Digital Media and Design', //content
  //   'Administration and Data Entry', //business
  //   'Science and Engineering', //it
  //   'Manufacturing and Product Sourcing', //business
  //   'Sales, Marketing and Forecasting', //business
  //   'Transportation and Logistics', //
  //   'Business, Accounting, Legal and Human Resources', //business
  //   'Languages and Translation',
  //   'Local Jobs',
  //   'Other',
  // ];
  return (
    <div>
      <footer className="bg-white">
        <div className="container mx-auto  px-8 ">
          <h1 className="mx-auto text-center uppercase text-gray-900 md:mb-6 font-semibold">
            Our Categories
          </h1>
          <div className="w-full flex flex-col md:flex-row py-6">
            {/* <div className="flex-1 mb-6">
              <div className="-ml-8">
                <img
                  src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1588518483/Main/link-blue_ry8izm.png"
                  alt=""
                  className="h-12 md:h-16 text-left "
                />
              </div>
            </div> */}

            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Tech</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2">
                    Software, Programming and IT
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Computing and Mobile Phones
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Science and Engineering
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Administration and Data Entry
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Business</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Manufacturing and Product Sourcing
                  </span>
                </li>

                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Sales, Marketing and Forecasting
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Business, Accounting, Legal and Human Resources
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Content</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Content and Writing
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Digital Media and Design
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Others</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Languages and Translation
                  </span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">Local Jobs</span>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <span className="text-gray-600 mr-2 ">
                    Digital Media and Design
                  </span>
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
