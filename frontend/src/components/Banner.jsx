import React from 'react'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='w-full order-2 md:oder-1 md:w-1/2 mt-12 md:mt-32'>
       <div className='space-y-12'>
       <h1 className='text-4xl font-bold'>
            hello, welcome here to lean something
           <span className='text-pink-500'>new everyday!!!</span>
        </h1>
        <p className='text-xl'> Hey there, fellow book lovers and literary enthusiasts! Have you ever found yourself captivated by a novel, feeling that there’s something deeper lurking beneath the surface of the words?
        </p>
        <label className="input input-bordered flex items-center gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
       <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
       <input type="text" className="grow" placeholder="Email" />
      </label>
       </div>
       <button className="btn mt-6 btn-secondary">Secondary</button>
    </div>

    
    <div className='order-1 w-full md:w-1/2'>
 
    <img src='https://img.freepik.com/premium-photo/watercolor-illustration-international-literacy-day-child-is-holding-open-book-there-are-s_486597-189.jpg'/>
       {/* <img src={Banner.jpg} className="w-92 h-92" alt=''/> */}
    </div>
    </div>
    </>
  )
}
export default Banner;