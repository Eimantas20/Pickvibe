import ionicIcon from '../../../img/Ionic-ios-apps.svg'

const User = () => {
    
    return(
        <div className='flex items-center h-20 border-b border-[#2E51BB] p-5 mr-1.25'>
            <img src={ionicIcon} alt='Ionic' className='mr-3 h-6'/>
            <h3 className='text-lg text-white font-robo'>Admin</h3>
        </div>
    )
}

export default User