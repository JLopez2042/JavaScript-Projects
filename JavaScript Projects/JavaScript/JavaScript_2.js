function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please input an alternative contact method");
      return false;
    }
  }