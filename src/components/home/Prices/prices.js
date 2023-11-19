import React from 'react'
import './prices.css'

const Prices = () => {
    return (
        <div className='pricessContainer'>
            <div>
                <table className='table'>
                    <tr className='tableHeader'>
                        <th colSpan={2}>Man</th>
                    </tr>
                    <tr>
                        <td  >Wash</td>
                        <td className='priceText'>100$</td>
                    </tr>
                    <tr>
                        <td>Trim</td>
                        <td className='priceText'>200$</td>
                    </tr>
                    <tr>
                        <td>Shave</td>
                        <td className='priceText'>300$</td>
                    </tr>
                    <tr>
                        <td>Styling</td>
                        <td className='priceText'>300$</td>
                    </tr>
                </table>
            </div>

            <div>
                <table className='table'>
                    <tr className='tableHeader'>
                        <th colSpan={2}>Woman</th>
                    </tr>
                    <tr>
                        <td >Wash</td>
                        <td className='priceText'>100$</td>
                    </tr>
                    <tr>
                        <td>Trim</td>
                        <td className='priceText'>200$</td>
                    </tr>
                    <tr>
                        <td>Shave</td>
                        <td className='priceText'>300$</td>
                    </tr>
                    <tr>
                        <td>Styling</td>
                        <td className='priceText'>300$</td>
                    </tr>
                </table>

            </div>

        </div>
    )

}

export default Prices

