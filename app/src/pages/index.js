import React from "react"

export default function Home() {
  return (
    <html>
      <head>
        <title>Eventually by HTML5 UP</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        {/* <link rel="stylesheet" href="assets/css/main.css" />  */}
      </head>
      <body class="is-preload">

        {/* Header  */}
        <header id="header">
          <h1>rgba to hex</h1>
          <p>A simple template for telling the world when you'll launch<br />
				your next big thing. Brought to you by <a href="http://html5up.net">HTML5 UP</a>.</p>
        </header>

        {/* Signup Form */}
        <form id="signup-form" method="post" action="#">
          <input type="number" placeholder="red" min="0" max="255" />
          <input type="number" placeholder="green" min="0" max="255" />
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="submit" value="Sign Up" />
        </form>

        {/*  Footer  */}
        <footer id="footer">
          <ul class="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
          </ul>
          <ul class="copyright">
            <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>

        {/*  Scripts  */}
        <script src="assets/js/main.js"></script>
      </body>
    </html>

  )
}
