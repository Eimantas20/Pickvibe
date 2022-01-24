import react, { useState } from 'react';
import box from '../../../img/box.svg';
import chevron from '../../../img/chevron-down.svg';
import activity from '../../../img/activity.svg';

const Menu = () => {
    const [ expansion, setExpansion ] = useState(false);
    const [ selection, setSelection ] = useState('Select one item');
    const [ display, setDisplay ] = useState('hidden')

    const dropdownData = [
        {
            name: 'Submenu item 1'
        },
        {
            name: 'Submenu item 2'
        },
        {
            name: 'Submenu item 3'
        }
    ]

    const expandDropdown = () => {
        setExpansion(!expansion);
        display === 'hidden'
        ?setDisplay('block')
        :setDisplay('hidden')
    }

    const makeSelection = (item) => {
        setSelection(item.name)
    }

    return (
        <div className='dropdown inline-block h-40 w-full relative z-100'>
            <div className='flex justify-between' onClick={expandDropdown}>
                <div className='inline-block flex items-center p-5'>
                    <img src={box} alt='Box' className='mr-3 inline-block' />
                    <p className='inline-block text-white font-robo'>Menu item</p>
                </div>
                <img src={chevron} alt="Expand" className={`inline-block mr-8 ${expansion ? 'transition-transform rotate-180' : 'transition-transform rotate:0'}`} />
            </div>
            <div aria-expanded={expansion} className='bg-[#1B389F] rounded-md mr-5'>
                {dropdownData.map((item, i) => (
                    <div key={i} className={`${display} p-5 flex`} onClick={() => makeSelection(item)}>
                        <img src={activity}  className='mr-3'/>
                        <p className='text-white font-robo'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu