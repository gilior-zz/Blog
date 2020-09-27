import React, { Component } from 'react';

const asyncComponent = (import_comp_func) => {
    class foo extends Component {
        state = { component: null }
        componentDidMount() {
            import_comp_func()
                .then((cmp) => {
                    console.log(cmp);
                    this.setState({ component: cmp.default })
                })
        }


        render() {
            const C = this.state.component;
            return this.state.component ? <C {...this.props}></C> : null
        }
    }
    return foo;
}

export let func = asyncComponent
