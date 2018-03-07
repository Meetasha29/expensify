import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state={
      category: props.expense? props.expense.category : '',
      description: props.expense? props.expense.description : '',
      note: props.expense? props.expense.note : '',
      amount: props.expense? (props.expense.amount).toString() : '',
      createdAt: props.expense? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: undefined,
      status: props.status
    };
  }

  onCategoryChange=(e)=>{
    const category= e.target.value;
    this.setState(()=>({category}));
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

    if(!this.state.category || !this.state.amount){
      this.setState(()=>({error: "Please provide category and amount"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      console.log("form submitted");
      this.props.onSubmit({
        category: this.state.category,
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
          {this.state.status? <h1 className="form-title">Update Expense</h1> : <h1 className="form-title">Add Expense</h1>}
          {this.state.error && <p> {this.state.error}</p>  }

        <form onSubmit={this.onSubmit}>

          <div className="field">
          <select required
            className="input"
            value={this.state.category}
          onChange={this.onCategoryChange}
            >
            <option value="">Choose category</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bill">Bill</option>
            <option value="Transportation">Transportation</option>
            <option value="Health and care">Heath and Care</option>
            <option value="Fashion">Fasion</option>
          </select>
            <span className="underline"></span>
        </div>

          <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
            <span className="underline"></span>
        </div>

        <div className="field">
            <input
            className="input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
            <span className="underline"></span>
        </div>

        <div className="field">
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths= {1}
            isOutsideRange={()=> false}
          />
        </div>

        <div className="field">
            <textarea className="text-area"
              placeholder="add a note for your expenses(optional)"
              value={this.state.note}
              onChange={this.onNoteChange}>
            </textarea>
          </div>

    <div className="field-button">
            {this.state.status==="edit"}
            <button className="button form-button">{this.state.status==="edit" ?
              "Update Expense":"Add Expense" }
            </button>
          </div>
        </form>
      </div>
    )
  }
}
