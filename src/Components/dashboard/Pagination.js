import chevronDoubleLeft from '../../img/chevrons-double-left.svg';
import chevronLeft from '../../img/chevron-left.svg';
import chevronDoubleRight from '../../img/chevrons-double-right.svg';
import chevronRight from '../../img/chevron-right.svg';
import chevronDown from '../../img/chevron-down.svg';

const Pagination = () => {

    return(
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-between w-1/3 sm:w-full sm:pr-2'>
                <img src={chevronDoubleLeft} alt='First' className='w-2.5'/>
                <img src={chevronLeft} alt='Previous' className='w-[0.265rem]'/>
                <button>...</button>
                <button className='flex-initial text-[#2D3748]'>1</button>
                <button className='flex-initial h-9 w-9 bg-white rounded-[7px] text-[#2D3748]'>2</button>
                <button className='flex-initial text-[#2D3748]'>3</button>
                <button>...</button>
                <img src={chevronRight} alt='Next' className='w-[0.265rem]'/>
                <img src={chevronDoubleRight} alt='Last' className='w-2.5'/>
            </div>
            <button className='h-9 bg-white w-20 rounded-[7px] py-2 px-3 flex flex-row justify-between'>
                <p className='leading-5'>10</p>
                <img src={chevronDown} alt='Expand' className='w-3'/>
            </button>
        </div>
    )
}

export default Pagination