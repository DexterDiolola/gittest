import React, { Component } from 'react'
import DatePicker from '../pages/CustomContents/DateRangeSelector'

export class SalesSummary extends Component {
    componentDidMount(){
        console.log('Sales Summary mounted')
    }
    render() {
        return (
            <div>
                <h3>Sales Summarry</h3>
                <DatePicker/>
            </div>
        )
    }
}

export default SalesSummary
