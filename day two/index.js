class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Shivi" from="Harsh"/>
                <Hello to="Yash" from="Suppi"/>
            </div>
        );
    }
}

ReactDOM.render(<App /> , document.getElementById('root'));