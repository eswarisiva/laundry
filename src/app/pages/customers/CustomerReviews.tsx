import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";

const CustomerReviews : FC = () => {
    return (
        <>
            <PageTitle>REVIEWS & RATINGS</PageTitle>

            <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                    <thead>
                        <tr className='fw-bold text-muted'>
                            <th className='min-w-100px'>Date</th>
                            <th className='min-w-200px'>Order Id</th>
                            <th className='min-w-100px'>Customer Name</th>
                            <th className='min-w-100px'>Mobile No</th>
                            <th className='min-w-150px'>Type</th>
                            <th className='min-w-150px'>Method</th>
                            <th className='min-w-100px'>Rating</th>
                            <th className='min-w-100px text-end'>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dd/mm/yy</td>
                            <td>ORD001</td>
                            <td>Name</td>
                            <td>9087719073</td>
                            <td>POS</td>
                            <td>Others</td>
                            <td>4/5</td>
                            <td>View</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CustomerReviews;