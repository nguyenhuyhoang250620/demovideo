import React, { Component } from 'react';
import videos from "../src/asset/video.mp4"
class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      selectedTime: 0
    };
  }

  handleTimeChange = () => {
    const selectedTime = parseFloat(this.timeInput.value);
    this.setState({ selectedTime });
    this.videoRef.current.currentTime = selectedTime;
  }

  render() {
    return (
      <div className="App">
        <video ref={this.videoRef} controls>
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <input
          type="text"
          ref={(input) => (this.timeInput = input)}
          placeholder="Enter time in seconds"
        />
        <button onClick={this.handleTimeChange}>Go to Time</button>
      </div>
    );
  }
}

export default App;
