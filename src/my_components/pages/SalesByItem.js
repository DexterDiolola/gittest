import React, { Component } from 'react'
import DatePicker from '../pages/CustomContents/DateRangeSelector'

export class SalesByItem extends Component {
    render() {
        return (
            <div>
                <h3>Sales By Item</h3>
                <DatePicker/>
            </div>
        )
    }
}

export default SalesByItem
