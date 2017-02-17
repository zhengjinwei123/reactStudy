//Spread Attributes
function Greeting(props){
    return (
      <div>
        <h1>fName:{props.firstName}</h1>
         <h2>lName:{props.lastName}</h2>
      </div>
    );
}
function App1(){
    return (<Greeting firstName="Ben" lastName="Hector" />);
}

function App2(){
    const props = {firstName:"Ben",lastName:"Hector"};
    return (<Greeting {...props} />)
}

ReactDOM.render(
    <App1 />,
    document.getElementById("root1")
);
ReactDOM.render(
    <App2 />,
    document.getElementById("root2")
);

//JSX Children
function Item(props){
    return <li>{props.message}</li>
}
function TodoList(){
    const todos = ["finish doc","submit pr","nag dan to view"];
    return (
      <ul>
        {todos.map((message)=><Item key={message} message={message}/>)}
      </ul>
    );
}

ReactDOM.render(
    <TodoList />,
    document.getElementById("root3")
);

//Functions as Children
function Repeat(props){
    let items = [];
    for(let i=0;i<props.numTimes;i++){
        items.push(props.children(i));
    }
    return <div>{items}</div>
}

function ListOfTenThings(){
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
}
ReactDOM.render(
    <ListOfTenThings />,
    document.getElementById("root4")
);

//Booleans, Null, and Undefined Are Ignored
function Ignore(){
    let messageList=["m","n","z"];
    return (
        <div>
            {messageList.length > 0 && 'hello'}<br/>
            {false},{undefined},{true},{null}<br/>
            {String(false)},{String(undefined)},{String(true)},{String(null)}
        </div>
    );
}
ReactDOM.render(
    <Ignore />,
    document.getElementById("root5")
);
