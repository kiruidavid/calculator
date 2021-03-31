class App extends React.Component{ 
    constructor(props){
        super(props) 
        this.state = { 
             value: "0",
             answer: " "
        }  
    } 
     handleDigit = digit => {
         this.setState({ 
             value : this.state.value !== '0' ? `${this.state.value}${digit}` : digit

         })
     } 
     handleOperator = operator => { 
     if(/[+\-*/]/.test(this.state.value)){ 
      if(/[+\-*/]/.test(this.state.value[this.state.value.length - 1])){  
          if(operator !== '-'){
              this.setState({
                  value: operator
              }) 
          } else if(!/\-/.test(this.state.value)){
              this.setState({
                  value: `${this.state.value}${operator}`
              })
          }


     } else {
         this.setState({
             value: operator, 
             answer: Math.round(eval(`${this.state.answer}${this.state.value}`) * 10000) / 10000
         })
     }

         } else {
             this.setState({
                 value: operator, 
                 answer: this.state.value
             })
         }

     }  
     handleComputation = () => {
        if(!/[+\-*/]/.test(this.state.value[this.state.value.length - 1])){
            this.setState({
                value: Math.round(eval(`${this.state.answer}${this.state.value}`) * 10000) / 10000
            })
        }
     } 

    handleDecimal = (val) => { 
        if(this.state.value.indexOf('.') === -1){
            this.setState({
                value: this.state.value + val
            })
        }

    }

        
    
    
    handleClear = () => {
        this.setState({
            value: '0', 
            answer: ''
        })
    }
    
    
        

    
        
        
    
    render(){
        return(
            <div className="calculator">
                <input type="text" id="display" value={this.state.value} placeholder="0"  /> 
                <input type="text" id="answer" value={this.state.answer} />
                <div className="calculator-keys">
                     <button type="button" 
                     className="operator" id="add"
                      value="+"  onClick={() => this.handleOperator("+")}>+</button>
                     <button type="button" className="operator" 
                     id="subtract" value="-"  onClick={() => this.handleOperator("-")}>-</button>
                     <button type="button" 
                     className="operator" id="multiply" value="*"  onClick={() => this.handleOperator("*")}>x</button>
                     <button type="button" 
                     className="operator" id="divide" value="/"  onClick={() => this.handleOperator("/")}>/</button>
                     <button type="button" id="seven"
                      value="7"  onClick={() => this.handleDigit("7")}>7</button>
                     <button type="button" 
                     id="eight" value="8"  onClick={() => this.handleDigit("8")}>8</button> 
                     <button type="button" id="nine" value="9" onClick={() => this.handleDigit("9")}>9</button>  
                     <button type="button" id="four" value="4" onClick={() => this.handleDigit("4")} >4</button> 
                     <button type="button" id="five" value="5" onClick={() => this.handleDigit("5")}>5</button> 
                     <button type="button" id="six" value="6" onClick={() => this.handleDigit("6")}>6</button> 
                     <button type="button" id="one" value="1" onClick= {() => this.handleDigit("1")}>1</button> 
                     <button type="button" id="two" value="2" onClick={() => this.handleDigit("2")}>2</button> 
                     <button type="button" id="three" value="3" onClick={()=> this.handleDigit("3")}>3</button> 
                     <button type="button" id="zero" value="0" onClick={() => this.handleDigit("0")}>0</button> 
                     <button type="button" id="decimal" value="." onClick={()=> this.handleDecimal}>.</button>  
                     <button type="button" id="clear" value="clear" onClick={this.handleClear}>AC</button> 
                     <button type="button" id="equals" value="=" onClick={this.handleComputation}>=</button>












                </div>
            </div>
        )
    }
} 
ReactDOM.render(<App/>, document.getElementById('root'))