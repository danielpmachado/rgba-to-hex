import React from "react"

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      red: '',
      green: '',
      blue: '',
      alfa: '',
      result: '',
    };
  }

  hexTable = (value) => {
    if (value < 10) return value.toString();
    switch (value) {
      case 10:
        return 'a';
      case 11:
        return 'b';
      case 12:
        return 'c';
      case 13:
        return 'd';
      case 14:
        return 'e';
      case 15:
        return 'f';
      default:
    }
  }

  convertToHex = (color) => {
    const first = Math.floor(color / 16);
    const second = 16 * (color / 16 - first);
    console.log('second', second);
    return this.hexTable(first) + this.hexTable(second);
  }

  convertAlfa = (alfa) => {
    const value = 255 * alfa / 100;
    return this.convertToHex(value);
  }

  handleSubmit = (event) => {
    const { red, green, blue, alfa } = this.state;
    const hexValue = '#' +
      this.convertToHex(red) +
      this.convertToHex(green) +
      this.convertToHex(blue) +
      this.convertAlfa(alfa);

    this.setState({ result: hexValue });
    event.preventDefault();
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    const { result } = this.state;
    return (
      <html>
        <head>
          <title>rgba to hex</title>
        </head>
        < body className="is-preload">
          < header id="header" >
            <h1>rgba to hex</h1>
            <p>A simple webpage which converts rgba values into hexadecimal<br />
				asdasd.</p>
          </header >
          <form id="signup-form" onSubmit={this.handleSubmit} >
            <input type="number" placeholder="red" name="red" min="0" max="255" onChange={this.handleChange} />
            <input type="number" placeholder="green" name="green" min="0" max="255" onChange={this.handleChange} />
            <input type="number" placeholder="blue" name="blue" min="0" max="255" onChange={this.handleChange} />
            <input type="number" placeholder="alfa" name="alfa" min="0" max="100" onChange={this.handleChange} />
            {/* <input type="email" name="email" id="email" placeholder="Email Address" /> */}
            <input type="submit" value="Convert" />
          </form >
          <p> hex value {result}</p>

          {/*  Scripts  */}
          {/* <script src="assets/js/main.js"></script> */}
        </body >
      </html >
    )
  }
}

export default Home;