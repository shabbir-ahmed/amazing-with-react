import React from 'react';


/*class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1> 
                <b>Bold</b>
            </div> 
        )
    }
}*/
class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}


export default App