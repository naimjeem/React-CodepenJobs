import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        jobs: []
      };
    }

  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    const url = 'https://codepen.io/jobs.json';
    this.serverRequest =
      axios.get(url)
        .then((result) => {
          this.setState({
            jobs: result.data.jobs
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <h1>Codepen Jobs!</h1>
        {/* Don't have an ID to use for the key, URL work ok? */}
        {this.state.jobs.map((job) => {
          return (
            <span key={job.url} className="job">

                <h2>{job.company_name}</h2>
              <span><b>{job.title}</b>   </span>
              <span className='term'>{job.term}</span>

            </span>
          );
        })}
      </div>
    )
  }
}

export default App;
