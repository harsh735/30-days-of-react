class Hello extends React.Component {
    render() {
        return <p>Hello {this.props.to} from {this.props.from}</p>;  //passing props as data in jsx
    }
}