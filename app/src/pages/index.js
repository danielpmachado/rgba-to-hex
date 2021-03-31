import React from "react"

export default function Home() {

  const handleSubmit = () => {
    console.log('submit!!!!!!');
  }

  return (
    <html>
      <head>
        <title>rgba to hex</title>
      </head>
      < body className="is-preload" >
        < header id="header" >
          <h1>rgba to hex</h1>
          <p>A simple webpage which converts rgba values into hexadecimal<br />
				asdasd.</p>
        </header >
        <form id="signup-form" onSubmit={handleSubmit} >
          <input type="number" placeholder="red" min="0" max="255" />
          <input type="number" placeholder="green" min="0" max="255" />
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="submit" value="Convert" />
        </form >

        {/*  Scripts  */}
        <script src="assets/js/main.js"></script>
      </body >
    </html >
  )
}
