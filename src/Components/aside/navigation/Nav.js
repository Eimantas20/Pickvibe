import home from '../../../img/home.svg';

const Nav = () => {
    return(
        <div className='bg-[#F1F5F8] rounded-l-full p-3 px-5 mt-5 relative z-100'>
            <div className='absolute w-[50px] h-[50px] bottom-full right-0 overflow-hidden after:absolute after:z-100 after:h-[25px] after:border-r after:bottom-0 after:right-0 before:content-["_"] before:block before:w-[50px] before:h-[50px] before:absolute before:bottom-0 before:right-0 before:shadow-[25px_25px_0_0_#F1F5F8] before:rounded-[50%]'></div>
            <img src={home} className='inline-block mr-3' />
            <p className='inline-block font-robo text-[#2F3747]'>CRUD example</p>
            <div className='absolute w-[50px] h-[50px] -z-100 top-full right-0 overflow-hidden after:absolute after:z-100 after:h-[25px] after:border-r after:top-0 after:right-0 before:content-["_"] before:block before:-z-100 before:w-[50px] before:h-[50px] before:absolute before:bottom-0 before:right-0 before:shadow-[25px_-25px_0_0_#F1F5F8] before:rounded-[50%]'></div>
        </div>
    )
}

export default Nav