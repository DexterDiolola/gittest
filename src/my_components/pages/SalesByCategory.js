import React, { Component } from 'react'
import DatePicker from '../pages/CustomContents/DateRangeSelector'

export class SalesByCategory extends Component {
    render() {
        return (
            <div>
                <h3>Sales By Category</h3>
                <DatePicker/>
            </div>
        )
    }
}

export default SalesByCategory
