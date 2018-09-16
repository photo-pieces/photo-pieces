import React from 'react';
class ComponentLoader extends React.Component {
  state = {
    Component: null
  };
  async UNSAFE_componentWillMount() {
    try {
      await this.fetchComponent();
    } catch (e) {
      console.log(e);
    }
  }
  async fetchComponent() {
    const Component = await this.props.loader();
    this.setState({
      Component: Component && Component.default ? Component.default : Component
    });
  }
  render() {
    const { Component } = this.state;
    return Component ? <Component {...this.props} /> : null;
  }
}
export default ComponentLoader;