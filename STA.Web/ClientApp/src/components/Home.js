import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { nameFromApi: 'World' };
    }

    componentDidMount() {
        this.populateName();
    }

    render() {
        let name = this.state.nameFromApi;

        return (
            <div>
                <h1>Hello, {name}!</h1>
            </div>
        );
    }

    async populateName() {
        const response = await fetch('helloworldclient');
        console.log(response);
        const data = await response.text();
        this.setState({ nameFromApi: data });
    }
}
