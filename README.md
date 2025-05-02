index.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>jQuery Mobile Auth App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- jQuery Mobile & jQuery -->
  <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

  <!-- Optional Custom Styles -->
  <link rel="stylesheet" href="style.css">

  <!-- Custom JS Logic -->
  <script src="script.js" defer></script>
</head>
<body>

<!-- Home Page -->
<div data-role="page" id="home">
  <div data-role="header"><h1>Welcome</h1></div>
  <div role="main" class="ui-content">
    <a href="#register" class="ui-btn ui-corner-all">Register</a>
    <a href="#login" class="ui-btn ui-corner-all">Login</a>
  </div>
</div>

<!-- Register Page -->
<div data-role="page" id="register">
  <div data-role="header"><h1>Register</h1></div>
  <div role="main" class="ui-content">
    <form id="registerForm">
      <label>Name:</label>
      <input type="text" id="regName" required>
      <label>Email:</label>
      <input type="email" id="regEmail" required>
      <label>Password:</label>
      <input type="password" id="regPassword" required>
      <button type="submit" class="ui-btn ui-corner-all">Submit</button>
    </form>
  </div>
</div>

<!-- Login Page -->
<div data-role="page" id="login">
  <div data-role="header"><h1>Login</h1></div>
  <div role="main" class="ui-content">
    <form id="loginForm">
      <label>Email:</label>
      <input type="email" id="loginEmail" required>
      <label>Password:</label>
      <input type="password" id="loginPassword" required>
      <button type="submit" class="ui-btn ui-corner-all">Login</button>
    </form>
    <p id="loginError" style="color:red; display:none;">Invalid email or password!</p>
  </div>
</div>

<!-- Profile Page -->
<div data-role="page" id="profile">
  <div data-role="header"><h1>Profile</h1></div>
  <div role="main" class="ui-content">
    <h3>Welcome, <span id="profileName"></span>!</h3>
    <p>Email: <span id="profileEmail"></span></p>
    <a href="#home" class="ui-btn ui-corner-all">Logout</a>
  </div>
</div>

</body>
</html>
