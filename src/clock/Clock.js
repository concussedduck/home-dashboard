import React from 'react';

class Clock extends React.PureComponent {
  state = {
    time: null,
  };

  render() {
    return (
      <div className="clock">
        <span>{this.state.time}</span>
      </div>
    );
  }

  refresh = () => {
    this.setState({
      time: this.formatTime(new Date()),
    });
  }

  formatTime(time) {
    return [time.getHours(), time.getMinutes(), time.getSeconds()]
      .map(num => num.toString())
      .map(this.leftpad)
      .join(':');
  }

  leftpad(str) {
    return str.length === 2 ? str : '0' + str;
  }

  componentDidMount() {
    const timer = setInterval(this.refresh, 100);

    this.setState({timer: timer});

    this.refresh();
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }
}

export default Clock;