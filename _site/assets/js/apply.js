function apply() {
  Swal.fire({
    title: "",
    html: `
        <div class="">
        <h1 class="text-center display-1 "> <span class="bi bi-computer text-danger"></span></h1>    
       <h2>Apply Now</h2>
       <form  method="post" class="applicationform">
  <p class="my-1">
    <input type="text" name="name" class="form-control" placeholder="Your Name " id="" required/>
  </p>
  <p class="my-1">
    <input type="text" name="email" class="form-control"  placeholder="Your Email " id="" required/>
  </p>
  <p class="my-1">
    <input type="text" name="phone" class="form-control"  placeholder="Your Phone " id="" required/>
  </p>
  <p class="my-1">
    <textarea type="text" class="form-control"  name="message" placeholder="Your Message " id="" required/></textarea>
  </p>
</form>

        <p><a class="btn btn-dark mr-2 m-2" onclick="Swal.close()">Cancel</a><a class="btn btn-warning m-2" onclick="sendapplication()">Send</a></p>
         
        </div>  
          `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: "whitepopup",
  });
}

function close() {
  Swal.close();
}

function sendapplication() {
  const name = document.getElementsByClassName("name");
  const email = document.getElementsByClassName("email");
  const phone = document.getElementsByClassName("phone");
  const message = document.getElementsByClassName("message");
  alert("application sent successfully !");
}
