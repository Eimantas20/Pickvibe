import react, { useEffect, useState } from 'react';
import checkSquareGreen from '../../img/check-square-green.svg';
import checkSquareRed from '../../img/check-square-red.svg';
import editImg from '../../img/edit.svg';
import deleteImg from '../../img/trash-2.svg';
import plusImg from '../../img/plus.svg';
import searchIcon from '../../img/search-1.svg';
import Pagination from './Pagination';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("data.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    }

    return (
        <div className="w-full inline-block bg-[#F1F5F8]">
            <h2 className='font-robo text-[19px] text-[#2D3748] my-6'>Data List Layout</h2>
            <div className='flex flex-row flex-wrap justify-between'>
                <div>
                    <button className='px-4 py-2 mr-2 bg-[#2141A8] max-h-9 rounded-[7px] text-white'><p className='leading-5'>Add New Product</p></button>
                    <button className='h-9 w-9 bg-white rounded-[7px]'><img src={plusImg} className='m-auto' /></button>
                </div>
                <p className='font-robo text-[15px] text-[#718196]'>Showing 1 to 10 of 150 entries</p>
                <div className='relative'>
                    <img src={searchIcon} className='absolute right-0 bottom-1/2 translate-y-1/2 mr-3' />
                    <input type="search" placeholder="Search..." className='rounded-[7px] w-60 h-[2.375rem] pl-3 bg-white placeholder:text-[15px] placeholder:font-robo placeholder:text-[#7F9EB8]' />
                </div>
            </div>
            <div className="grid grid-cols-6 h-[68px]">
                <p className="text-[#2D3748] self-center ml-3 text-[15px] sm:text-[12px] sm:ml-1">IMAGES</p>
                <p className="text-[#2D3748] self-center col-span-2 text-[15px] sm:text-[12px]">PRODUCT NAME</p>
                <p className="text-[#2D3748] self-center justify-self-center text-[15px] sm:text-[12px]">STOCK</p>
                <p className="text-[#2D3748] self-center justify-self-center text-[15px] sm:text-[12px]">STATUS</p>
                <p className="text-[#2D3748] self-center justify-self-center text-[15px] sm:text-[12px]">ACTIONS</p>
            </div>
            {products && products.length > 0 ?
                <div>
                {products.map((product, i) => (
                    <div className="grid grid-cols-6 shadow-mdlg h-[68px] bg-white rounded-lg my-2">
                        <div key={i} className="flex flex-row mr-6 ml-3 self-center sm:mr-0 sm:ml-0">
                            {product.images.map((img, i) => (
                                <img src={require(`../../img/${img}.jpg`)} alt="Product" className={`object-cover rounded-full w-12 h-12 border-2 border-slate-100 -mr-6 sm:${i>0 && "hidden flex-none" }`} />
                            ))}
                        </div>
                        <div className="col-span-2 self-center">
                            <p className="text-base text-[#2D3748]">{product.product_name}</p>
                            <p className="text-sm text-[#718196]">{product.category}</p>
                        </div>
                        <p className="justify-self-center self-center">{product.stock}</p>
                        <div className="justify-self-center self-center">
                            <img src={`${product.status === 'active' ? checkSquareRed : checkSquareGreen}`} className="inline-block mr-1.5" />
                            <p className={`inline-block ${product.status === 'active' ? 'text-rddel' : 'text-grina'} sm:hidden`}>{product.status}</p>
                        </div>
                        <div className="justify-self-center flex flex-row self-center">
                            <img src={editImg} alt="Edit" className="mr-1 w-3.5 h-3.5 mt-1.5" />
                            <p className="mr-3 text-[#d32d2b] sm:hidden">Edit</p>
                            <img src={deleteImg} alt="Delete" className="mr-1 w-3.5 h-3.5 mt-1.5" />
                            <p className="text-[#d32d2b] sm:hidden">Delete</p>
                        </div>
                    </div>
                ))}
                <Pagination />
                </div>
                : <h1 className="text-3xl font-bold underline">No products found</h1>
            }
        </div>
    )
}

export default ProductsList