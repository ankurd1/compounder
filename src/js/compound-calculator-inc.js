var React = require("React");

var CompoundCalculatorInc = React.createClass({
  getInitialState: function() {
    return {
      initial_val: 0,
      addition_val: 0,
      return_val: 0,
      time_val: 0
    };
  },

  handleChange: function(event) {
    if (event.target.id == "initial") {
      this.setState({initial_val: event.target.value});
    } else if (event.target.id == "addition") {
      this.setState({addition_val: event.target.value});
    } else if (event.target.id == "return") {
      this.setState({return_val: event.target.value});
    } else if (event.target.id == "time") {
      this.setState({time_val: event.target.value});
    }
  },

  getFinal: function() {
    var p = Math.pow;
    var i = parseFloat(this.state.initial_val);
    var a = parseFloat(this.state.addition_val);
    var t = parseFloat(this.state.time_val);
    var r = parseFloat(this.state.return_val) / 100;

    var result = i * p(1+r, t) + a * (p(1+r, t+1) - (1+r)) / r
    result = Math.round(result * 100) / 100;

    if (isFinite(result)) {
      return result;
    } else {
      return "Error!";
    }
  },

  render: function() {
    return (
      <form classNameName="form-horizontal">
        <div className="form-group">
          <label className="col-xs-4 control-label">Initial amount</label>
          <div className="col-xs-8">
            <input
              type="number"
              className="form-control"
              id="initial"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-4 control-label">Annual addition</label>
          <div className="col-xs-8">
            <input
              type="number"
              className="form-control"
              id="addition"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-4 control-label">Expected annual return</label>
          <div className="col-xs-8">
            <input
              type="number"
              className="form-control"
              id="return"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-4 control-label">Time</label>
          <div className="col-xs-8">
            <input
              type="number"
              className="form-control"
              id="time"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-4 control-label">Final amount</label>
          <div className="col-xs-8">
            <input
              type="text"
              className="form-control"
              id="final"
              value={this.getFinal()}
              readOnly>
            </input>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = CompoundCalculatorInc;
