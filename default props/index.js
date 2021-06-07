class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Yash"
                    from="Harsh"
                    bangs={4}
                />    
                <Hello 
                    to="Suppi"
                />    
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));