function sendEmail(event) {
   event.preventDefault(); // Prevent the form from submitting normally

   var name = document.getElementById('name').value;
   var surname = document.getElementById('surname').value;
   var email = document.getElementById('email').value;
   var contact_number = document.getElementById('contact_number').value;
   var reason = document.getElementById('reason').value;

   if (!name || !surname || !email || !contact_number || !reason) {
      alert("Please fill out all fields.");
      return;
   }

   var subject = "Contact from " + name + " " + surname;

   let preDetailText = "Contact reqeust from neon theme park website\n\n";

   var body = 
      preDetailText
      + "Name: " + name 
      + "\nSurname: " + surname 
      + "\nEmail: " + email 
      + "\nContact Number: " 
      + contact_number 
      + "\nReason for Contact: " 
      + reason;

   window.location.href = "mailto:dewald844@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}