

const Navbar = () => {
  return (
    <>
      <header class="text-gray-600 body-font bg-white fixed w-full z-10">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span class="ml-3 text-xl font-bold">Shubham Patodia</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a class="mr-5 hover:text-gray-900 ">About</a>
            <a class="mr-5 hover:text-gray-900">Products</a>
            <a class="mr-5 hover:text-gray-900">Blogs</a>
            <a class="mr-5 hover:text-gray-900">Testimonial</a>
            <a class="mr-5 hover:text-gray-900">Contact</a>

          </nav>
          <button class="inline-flex items-center bg-sky-500  text-white font-bold border-0 rounded-full  py-2 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Connnect Now
            
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;