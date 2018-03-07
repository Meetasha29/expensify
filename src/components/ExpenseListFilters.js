import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{
  state={
    calenderFocused: null
  };

  onDatesChange=({startDate,endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));

  };
  onFocusChange=(calenderFocused)=>{
    this.setState(()=>({calenderFocused}));
  }

  render(){
    return(
    <div className="row filter-container">
        <div className="text-filter col span-2-of-9">
          <input className="input" type="text" value={this.props.filters.text} onChange={(e)=>{
              this.props.dispatch(setTextFilter(e.target.value));
          }}/>
          <span className="underline"></span>
        </div>

        <div className="date-amount-sort col span-1-of-9">
          <select
            value={this.props.filters.sortBy}
            onChange={(e)=>{
              if(e.target.value==='date'){
                this.props.dispatch(sortByDate());
              }
              else if(e.target.value==='amount'){
                this.props.dispatch(sortByAmount());
              }
            }}
            >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>


        <div className="col span-3-of-9 date-range">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=> false}
            />
        </div>
      </div>
);
  }
};

const mapStateToProps=(state)=>{
  return{
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
