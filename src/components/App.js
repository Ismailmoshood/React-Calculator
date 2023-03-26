// Imports.
import React from 'react';
import OutputScreen from './OutputScreen';
import Button from './Button';



class App extends React.Component {
constructor() {
	super();
	this.state = {
	question: '',
	answer: ''
	}
	this.handleClick = this.handleClick.bind(this);
}
handleClick(event){
    const value = event.target.value;
    
    switch (value) {
        case '=': {
        if (this.state.question!=='')
        {
            var ans='';
                try
                {
             /*eslint-disable-next-line */        
              ans = eval(this.state.question);
                }
                catch(err)
                {
                    this.setState({answer: "Math Error"});
                }
                 /*eslint-disable-next-line */
                if (ans===undefined || ans=='Infinity'){
                    this.setState({answer: "Math Error", question: ''});

                }else{
                    this.setState({ answer: ans , question: ''});
                }
            }
            break;
        }
        case 'AC': {
        this.setState({ question: '', answer: '' });
        break;
        }
    
        case 'DEL': {
        var str = this.state.question;
            str = str.substr(0,str.length-1);
            this.setState({question: str});
            break;
        }
    
      default: {
        // for every other command, update the answer in the state
        this.setState(prevState=> {
            return {
                answer: '',   
                question: prevState.question += value
            }})

        break;
        }
     }
    }
     check() {
        return (this.state.answer !=='')?this.state.answer:this.state.question
    }

	render()
	{
	return (
	<div className="container">
	<OutputScreen value={this.check()}/>
	<div className="main">
	<Button label={'AC'} handleClick = {this.handleClick}/>
	<Button label={'DEL'} handleClick = {this.handleClick}/>
	<Button label={'/'} handleClick = {this.handleClick}/>
    <Button label={'%'} handleClick = {this.handleClick}/>
    
	<Button label={'1'} handleClick = {this.handleClick}/>
	<Button label={'2'} handleClick = {this.handleClick}/>
	<Button label={'3'} handleClick = {this.handleClick}/>
	<Button label={'+'} handleClick = {this.handleClick}/>
    
	<Button label={'4'} handleClick = {this.handleClick}/>
	<Button label={'5'} handleClick = {this.handleClick}/>
	<Button label={'6'} handleClick = {this.handleClick}/>
	<Button label={'-'} handleClick = {this.handleClick}/>
    
	<Button label={'7'} handleClick = {this.handleClick}/>
	<Button label={'8'} handleClick = {this.handleClick}/>
	<Button label={'9'} handleClick = {this.handleClick}/>
	<Button label={'*'} handleClick = {this.handleClick}/>
    
	
    <Button label={'.'} handleClick = {this.handleClick}/>
	<Button label={'0'} handleClick = {this.handleClick}/>
	<Button label={'00'} handleClick = {this.handleClick}/>
    <Button label={'='} handleClick = {this.handleClick}/>
	</div>
	</div>
	);
}
}

export default App;
