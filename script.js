$(document).on("pagecreate", "#register", function () {
    $('#registerForm').submit(function (e) {
      e.preventDefault();
  
      const name = $('#regName').val();
      const email = $('#regEmail').val();
      const password = $('#regPassword').val();
  
      // Store user data in localStorage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
  
      alert('Registration successful!');
      $.mobile.changePage('#home');
    });
  });
  
  $(document).on("pagecreate", "#login", function () {
    $('#loginForm').submit(function (e) {
      e.preventDefault();
  
      const loginEmail = $('#loginEmail').val();
      const loginPassword = $('#loginPassword').val();
  
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');
      const storedName = localStorage.getItem('userName');
  
      if (loginEmail === storedEmail && loginPassword === storedPassword) {
        $('#profileName').text(storedName);
        $('#profileEmail').text(storedEmail);
        $('#loginError').hide();
        $.mobile.changePage('#profile');
      } else {
        $('#loginError').show();
      }
    });
  });
  