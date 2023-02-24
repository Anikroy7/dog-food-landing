import React from 'react';

const Ratings = () => {
    return (
        <div>
            <p className='font-bold mt-2'>Customer ratings by feature</p>
            <section className='mt-5'>
                <div className="overflow-x-auto">
                    <table className=" w-72">

                        <tbody>
                            <tr>
                                <td>Ingredient quality</td>
                                <td>⭐⭐⭐⭐⭐</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Flavour</td>
                                <td>⭐⭐⭐⭐⭐</td>
                                <td>4.5</td>
                            </tr>
                            <tr>
                                <td>Value for money</td>
                                <td>⭐⭐⭐⭐⭐</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>Freshness</td>
                                <td>⭐⭐⭐⭐⭐</td>
                                <td>4.4</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    );
};

export default Ratings;