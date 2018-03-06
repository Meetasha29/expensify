import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state={
      description: props.expense? props.expense.description : '',
      note: props.expense? props.expense.note : '',
      amount: props.expense? (props.expense.amount).toString() : '',
      createdAt: props.expense? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: undefined,
      status: props.status
    };
  }


  onDescriptionChange=(e)=>{
    const description= e.target.value;
    this.setState(()=>({description}));
  }
  onNoteChange=(e)=>{
      const note=e.target.value;
      this.setState(()=>({note}));
  }
  onAmountChange=(e)=>{
    const amount=e.target.value;
    if(!amount||amount.match(/^\d{1,}$/)){
      this.setState(()=>({amount}));
    }
  }
  onDateChange=(createdAt)=>{
    if(createdAt){
      this.setState(()=>({createdAt}));
  }
  }
  onFocusChange=({focused})=>{
    this.setState(()=>({calenderFocused: focused}))
  }
  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState(()=>({error: "Please provide description and amount"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      console.log("form submitted");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render(){
    return(
      <div>
          {this.state.error && <p> {this.state.error}</p>  }
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
            <input type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths= {1}
            isOutsideRange={()=> false}
          />
            <textarea placeholder="add a note for your expenses(optional)"
              value={this.state.note}
              onChange={this.onNoteChange}>
            </textarea>
            {this.state.status==="edit"}
            <button className="button">{this.state.status==="edit" ?
              "Update Expense":"Add Expense" }
            </button>
        </form>
      </div>
    )
  }
}
