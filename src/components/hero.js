

function Hero() {
    return (
        <div><main className='bg-sky-100'>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Notebook is a place  where you can find
                            <br class="hidden lg:inline-block" />your perfect blogs
                        </h1>
                        <p class="mb-8 leading-relaxed">Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div class="relative flex justify-center items-start h-64">
                            {/* <!-- Semi-circle --> */}
                            <div class="w-32 h-16 bg-blue-500 rounded-t-full absolute top-0"></div>
                            {/* <!-- Rectangle --> */}
                            <div class="w-32 h-32 bg-blue-500 absolute top-8"></div>
                        </div>

                    </div>
                </div>
            </section>
        </main></div>
    )
}

export default Hero