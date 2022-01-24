import chevronRight from '../../img/chevron-right.svg';
import searchIcon from '../../img/search.svg';
import bell from '../../img/bell.svg';
import profileImg from '../../img/profile.jpg';

const Topbar = () => {

    const breadcrumbs = [
        'Application',
        'Dashboard'
    ]

    return(
        <div className="w-full border-b flex flex-row justify-between h-[68px] items-center sm:flex-col sm:justify-start sm:items-start">
            <div className="flex flex-row sm:pl-2">
                {breadcrumbs && breadcrumbs.length>0 &&
                    breadcrumbs.map((breadcrumb, i) => (
                        <div key={i} className='flex flex-row' >
                            <p className={`mr-3 font-robo text-[15px] ${i === breadcrumbs.length - 1 ? 'text-[#1D40AA]' : 'text-[#2F3747]'}`}>{breadcrumb}</p>
                            {i !== breadcrumbs.length - 1 && <img src={chevronRight} alt="Next" className='mr-3'/>}
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-row items-center'>
                <div className='relative mr-8 sm:mr-4'>
                    <img src={searchIcon} className='absolute right-0 bottom-1/2 translate-y-1/2 mr-3' />
                    <input type="search" placeholder="Search..." className='rounded-full w-60 h-[2.375rem] pl-3 bg-[#D1DFEA] placeholder:text-[15px] placeholder:font-robo placeholder:text-[#7F9EB8]' />
                </div>
                <div className='relative h-5 mr-8 shrink-0 sm:mr-4'>
                    <img src={bell} alt="Notifications"/>
                    <div className='absolute w-2 h-2 bg-[#d32728] rounded-full -top-1 right-0' />
                </div>
                <img src={profileImg} alt="User" className='w-8 h-8 rounded-full' />
            </div>
        </div>
    )
}

export default Topbar