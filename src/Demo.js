import React from 'react';
class Demo extends React.Component {
  state = {
    credit: ""
  }
  inputadded = (e) => {
    const value = e.target.value;
    this.setState({
      credit: value
    })
    this.addDashes(e.target.value);
  }
  addDashes = (str) => {
    let phone = str.replace(/[^\d]/g, "");
    if (phone.length > 2) {
      let ans = phone.replace(/(\d{3})(\d{1})/, "($1) $2");
      this.setState({
        credit: ans
      }, () => {
        this.handleRemove();
      })
    }
    if (phone.length > 6) {
      let result = phone.replace(/(\d{3})(\d{3})(\d{1})/, "($1) $2-$3");
      this.setState({
        credit: result
      }, () => {
        this.handleRemove();
      })
    }
  }
  handleRemove = () => {
    const { credit } = this.state;
    if (credit.length === 7) {
      let result = credit.replace("(", "");
      result = credit.replace(")", "");
      result = credit.replace(" ", "");
      console.log("remocecredit", result)
    }
  }

  render() {
    const { credit } = this.state;
    return (
      <div>
        <input id="input_4" maxLength="14" name="atn" value={credit} size="25" onChange={this.inputadded} />
      </div>
    )
  }
}
export default Demo;