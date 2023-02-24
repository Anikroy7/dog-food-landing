import React from 'react';

const Brands = () => {
    return (
        <div className='py-3'>
            <div className="overflow-x-auto">
                <table className=" w-72">
                    <tbody>
                        <tr>
                            <td className='font-bold'>Brand</td>
                            <td>Pedigree</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Flavor</td>
                            <td>Roasted Chicken, Rice & Vegetable Flavor</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Age Range Description	</td>
                            <td>Baby</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Target Species </td>
                            <tx1d>Dog</tx1d>
                        </tr>
                        <tr>
                            <td className='font-bold'>Item Form</td>
                            <td>Dry</td>
                        </tr>
                        {/*  <tr>
                            <td className='font-bold'>Product</td>
                            <td>Muscle, Digestion</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Brands;