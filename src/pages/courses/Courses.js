import React, { useState } from "react";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import { BsChevronDown } from "react-icons/bs";
import SingleSlide from "./../../components/slider/SingleSlide";
import { newest } from "./../../data";

const Courses = () => {
  const [type, setType] = useState(false);
  const [category, setCategory] = useState(false);
  const [sort, setSort] = useState(false);

  const openSub = (item) => {
    if (item === "type") {
      //   console.log(type);
      setType(!type);
    } else if (item === "cat") {
      setCategory(!category);
    } else {
      setSort(!sort);
    }
  };

  return (
    <div>
      <Header />

      <section className="pt-9 px-14 text-secondary-700">
        {/* title */}
        <div>
          <h1 className="font-extrabold text-2xl text-secondary-800">
            دوره‌های آموزش برنامه‌نویسی
          </h1>
        </div>
        {/* body */}
        <div className="grid grid-cols-12 mt-10">
          {/* category */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 col-span-12 lg:pl-8 order-2 lg:order-2">
            <div className="mb-5  bg-white rounded-2xl">
              <div
                onClick={() => openSub("type")}
                className={`transition-all duration-200 ease-linear ${
                  type ? "py-6" : "py-4"
                } flex px-5 items-center justify-between cursor-pointer`}
              >
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="w-5 h-5 text-secondary-700"
                    >
                      <path
                        fill="currentColor"
                        d="M18.333 5v2.017c0 1.316-.833 2.15-2.15 2.15h-2.85V3.342c0-.925.759-1.675 1.684-1.675a3.35 3.35 0 0 1 2.341.975c.6.608.975 1.441.975 2.358Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M1.667 5.833V17.5A.83.83 0 0 0 3 18.167L4.425 17.1a.84.84 0 0 1 1.1.083l1.383 1.392a.84.84 0 0 0 1.184 0l1.4-1.4a.826.826 0 0 1 1.083-.075L12 18.167a.835.835 0 0 0 1.333-.667V3.333c0-.916.75-1.666 1.667-1.666H5C2.5 1.667 1.667 3.158 1.667 5v.833Z"
                        opacity="0.4"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M10 8.125H5a.63.63 0 0 1-.625-.625A.63.63 0 0 1 5 6.875h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Zm-.625 3.333h-3.75A.63.63 0 0 1 5 10.833a.63.63 0 0 1 .625-.625h3.75a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-bold text-[16px]">نوع دوره</p>
                </div>
                <span
                  className={`transition-all duration-[0.45] ease-linear ${
                    type ? "rotate-180" : "rotate-0"
                  } text-sm`}
                >
                  <BsChevronDown />
                </span>
              </div>

              <div
                className={` transition-all duration-300 ease-linear ${
                  type ? "overflow-visible max-h-96" : "overflow-hidden max-h-0"
                }`}
              >
                <div className=" px-5 mt-3">
                  <div className="h-[2px] bg-gray-200"></div>
                </div>

                <div className="p-4">
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      در حال برگزاری
                    </label>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      تکمیل ضبط‌شده‌ها
                    </label>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      تخفیف‌دار
                    </label>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      رایگان
                    </label>
                  </div>
                  <div class="flex items-center gap-2 mb-1">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      نقدی
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5  bg-white rounded-2xl">
              <div
                onClick={() => openSub("cat")}
                className={`
                transition-all duration-200 ease-linear ${
                  category ? "py-6" : "py-4"
                } flex p-4 items-center justify-between cursor-pointer`}
              >
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="none"
                      class="w-5 h-5 text-secondary-700"
                    >
                      <path
                        fill="currentColor"
                        d="M32.151 4h6.772C41.727 4 44 6.292 44 9.12v6.829c0 2.828-2.273 5.12-5.077 5.12h-6.772c-2.805 0-5.077-2.292-5.077-5.12v-6.83C27.074 6.293 29.346 4 32.151 4Z"
                        opacity="0.4"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.849 26.931c2.805 0 5.077 2.292 5.077 5.12v6.83c0 2.825-2.272 5.119-5.077 5.119H9.077C6.273 44 4 41.706 4 38.88v-6.829c0-2.828 2.273-5.12 5.077-5.12h6.772Zm23.074 0c2.804 0 5.077 2.292 5.077 5.12v6.83C44 41.705 41.727 44 38.923 44h-6.772c-2.805 0-5.077-2.294-5.077-5.12v-6.829c0-2.828 2.272-5.12 5.077-5.12h6.772ZM15.849 4c2.805 0 5.077 2.292 5.077 5.12v6.829c0 2.828-2.272 5.12-5.077 5.12H9.077C6.273 21.069 4 18.777 4 15.949v-6.83C4 6.293 6.273 4 9.077 4h6.772Z"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-bold">دسته دوره</p>
                </div>
                <span
                  className={`transition-all duration-[0.45] ease-linear ${
                    category ? "rotate-180" : "rotate-0"
                  } text-sm`}
                >
                  <BsChevronDown />
                </span>
              </div>

              <div
                className={` transition-all duration-300 ease-linear ${
                  category
                    ? "overflow-visible max-h-96"
                    : "overflow-hidden max-h-0"
                }`}
              >
                <div className=" px-4 mt-3">
                  <div className="h-[2px] bg-gray-200"></div>
                </div>

                <div className="p-4">
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      فرانت اند
                    </label>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-200 border-none rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label for="default-checkbox" class="ml-2 text-gray-500">
                      بک اند
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5  bg-white rounded-2xl">
              <div
                onClick={() => openSub("sort")}
                className={`transition-all duration-200 ease-linear ${
                  sort ? "py-6" : "py-4"
                } flex p-4 items-center justify-between cursor-pointer`}
              >
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="w-5 h-5 text-secondary-700"
                    >
                      <path
                        fill="currentColor"
                        d="M18.333 8.967a.717.717 0 0 0-.716-.717H2.383c-.4 0-.716.317-.716.717 0 4.908 3.425 8.333 8.333 8.333s8.333-3.433 8.333-8.333Z"
                        opacity="0.4"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m10.442 2.883 2.375 2.367a.629.629 0 0 1 0 .883.629.629 0 0 1-.884 0l-1.308-1.3v7.975a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625V4.833l-1.3 1.309a.629.629 0 0 1-.883 0A.627.627 0 0 1 7 5.7c0-.158.058-.317.183-.442l2.375-2.366a.621.621 0 0 1 .884-.009Z"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-bold">مرتب‌سازی</p>
                </div>
                <span
                  className={`transition-all duration-[0.45] ease-linear ${
                    sort ? "rotate-180" : "rotate-0"
                  } text-sm`}
                >
                  <BsChevronDown />
                </span>
              </div>

              <div
                className={` transition-all duration-300 ease-linear ${
                  sort ? "overflow-visible max-h-96" : "overflow-hidden max-h-0"
                }`}
              >
                <div className=" px-4 mt-3">
                  <div className="h-[2px] bg-gray-200"></div>
                </div>

                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <input type="radio" className="border-none bg-gray-200" />
                    <label htmlFor="">محبوب‌ترین</label>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <input type="radio" className="border-none bg-gray-200" />
                    <label htmlFor="">جدیدترین</label>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <input type="radio" className="border-none bg-gray-200" />
                    <label htmlFor="">قدیمی‌ترین</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* courses */}
          <div className="mt-12 col-span-12 lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            {/* {newest.map((course) => (
              <div key={course.id}>
                <SingleSlide course={course} />
              </div>
            ))} */}
          </div>
        </div>
      </section>

      <div className="w-20 h-[500px]"></div>
      <Footer />
    </div>
  );
};

export default Courses;
