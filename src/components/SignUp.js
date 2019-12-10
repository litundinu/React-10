import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'test@email.test'
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      };

    handleSubmit = (event) => {
        event.preventDefault()
        
        

    }

  
    render() {
    return(<div>
        <form onSubmit={this.handleSubmit}>
            <label><h1>{this.state.value}</h1></label>
            <input type="email" name="email" onChange={this.handleChange} />
            
            </form> 
    </div>);
  }
}




export default SignUp