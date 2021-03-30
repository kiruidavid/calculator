class App extends React.Component{ 
    constructor(props){
        super(props) 
        this.state = {
            expression: ''
        }  
    } 
    handleDisplay = val => this.setState({
        expression: this.state.expression + val
    })  
    handleClear = () => {
        this.setState({
            expression: ''
        })
    }
    render(){
        return(
            <div className="calculator">
                <input type="text" className="calculator-screen" value={this.state.expression} placeholder="0" /> 
                <div className="calculator-keys">
                     <button type="button" 
                     className="operator" id="add"
                      value="+"  onClick={() => this.handleDisplay("+")}>+</button>
                     <button type="button" className="operator" 
                     id="subtract" value="-"  onClick={() => this.handleDisplay("-")}>-</button>
                     <button type="button" 
                     className="operator" id="multiply" value="*"  onClick={() => this.handleDisplay("*")}>x</button>
                     <button type="button" 
                     className="operator" id="divide" value="/"  onClick={() => this.handleDisplay("/")}>/</button>
                     <button type="button" id="seven"
                      value="7"  onClick={() => this.handleDisplay("7")}>7</button>
                     <button type="button" 
                     id="eight" value="8"  onClick={() => this.handleDisplay("8")}>8</button> 
                     <button type="button" id="nine" value="9" onClick={() => this.handleDisplay("9")}>9</button>  
                     <button type="button" id="four" value="4" onClick={() => this.handleDisplay("4")} >4</button> 
                     <button type="button" id="five" value="5" onClick={() => this.handleDisplay("5")}>5</button> 
                     <button type="button" id="six" value="6" onClick={() => this.handleDisplay("6")}>6</button> 
                     <button type="button" id="one" value="1" onClick= {() => this.handleDisplay("1")}>1</button> 
                     <button type="button" id="two" value="2" onClick={() => this.handleDisplay("2")}>2</button> 
                     <button type="button" id="three" value="3" onClick={()=> this.handleDisplay("3")}>3</button> 
                     <button type="button" id="zero" value="0" onClick={()=> this.handleDisplay("0")}>0</button> 
                     <button type="button" id="decimal" value="." onClick={()=> this.handleDisplay(".")}>.</button>  
                     <button type="button" id="clear" value="clear" onClick={this.handleClear}>AC</button> 
                     <button type="button" id="equals" value="=" onClick={this.handleDisplay}>=</button>












                </div>
            </div>
        )
    }
} 
ReactDOM.render(<App/>, document.getElementById('root'))