function start() {
  Swal.fire({
    title: " Start a building project?",
    html: `
    <h1 class="text-center display-1 "> <span class="bi bi-house-gear-fill text-warning"></span></h1>    
   
    <p><a class="btn btn-light mr-2 m-2" onclick="Swal.close()">Not Yet</a><a class="btn btn-warning m-2" onclick="contact()">Yes please</a></p>
       
      `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
  });
}

function close() {
  Swal.close();
}

function contact() {
  window.location.href = "/contact";
}
