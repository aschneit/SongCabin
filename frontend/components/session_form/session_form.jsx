import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      band_name: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
    this.setState({
      band_name: '',
      password: '',
      email: ''
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className = 'login-form-title'>{this.props.formType}</div>
        <div className="login-divider"></div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className = "item">
            <label>Band name</label>
              <input type="text"
                value={this.state.band_name}
                onChange={this.update('band_name')}
                className="login-input"
              />
            </div>
            <br/>
            <div className = "item">
            <label>Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </div>
            <br/>
            <div className = "item">
            <label>Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </div>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
