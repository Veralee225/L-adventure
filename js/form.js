// To submit the form on Netlify using AJAX
 const form = document.querySelector("form").addEventListener("submit", handleSubmit);

 const handleSubmit = (e) => {
     e.preventDefault()
     let myForm = document.getElementById('#contact');
     let formData = new FormData(myForm)
     fetch('/',{
         method: 'POST',
         headers: { "content-Type": "application/x-WWW-form-urlencoder" },
         body: new URLSearchParams(formData).toString()
     }).then(() => console.log('Form successfully submitted')).catch((error) =>
     alert(error))
 }