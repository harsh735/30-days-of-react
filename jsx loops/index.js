class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name = "Yash"
                    hobbies = {['Piano', 'Singing', 'Football']}
                />    
                <Friend 
                    name = "Harsh"
                    hobbies = {['Painting', 'Playing']}
                />
            </div>
        )
    }
} 


ReactDOM.render(<App />, document.getElementById('root'));