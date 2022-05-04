document.getElementById('prof-button').onclick = () => {
  document.getElementById('student_prof').style.display = 'none' //Prevention of display of student and professor buttons
  document.getElementById('login_form').style.display = 'block'

  document.getElementById('submitbutton').onclick = () => {
    var prof_name = document.getElementById('Prof_Name').value // Retrieval of data from Prof authentication form
    var prof_password = document.getElementById('passwordform').value

    if (prof_name != '' && prof_password == 'p') { // Case of Professor entering in the correct password
      alert('Access Granted')
      //setting User 1 for professor in session storage
      sessionStorage.setItem("User", "1");
      document.getElementById("prof_form").action = "breadboard.html"; //Form action for clicking enter key

      
    } else if (prof_name == '' && prof_password == '') {
      alert('Please enter your Name and Password')
    } else if (prof_name != '' && prof_password != 'p') {
      document.getElementById('passwordform').value = ''
      alert('Incorrect Password')
    }
  }
}

document.getElementById('stu-button').onclick = () => {
  document.getElementById('student_prof').style.display = 'none' //Prevention of display of student and professor buttons
  document.getElementById('login_form2').style.display = 'block'

  document.getElementById('submitbutton_Matriculation').onclick = () => {
    var Matriculation_number = document.getElementById( // Retrieval of data from Student authentication form
      'Matriculation_number'
    ).value
    var password_Matriculation = document.getElementById(
      'password_Matriculation'
    ).value

    if (
      Matriculation_number != '' &&
      password_Matriculation == 's' // Case of Student[] entering in the correct password
    ) {
      alert('Access Granted')
      //setting User 1 for student in session storage
      sessionStorage.setItem("User", "2");
      document.getElementById("std_form").action = "breadboard.html"; //Form action for clicking enter key
      
    } else if (Matriculation_number == '' && password_Matriculation == '') {
      alert('Please enter your Matriculation Number and Password')
    } else if (
      Matriculation_number != '' &&
      password_Matriculation != 's'
    ) {
      alert('Incorrect Password')
    }
  }
}

