import Swal from 'sweetalert2';


export const shootAlertOK = (title, text) => {

  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
  });
}


export const shootAlertError = (title, text) => {

  Swal.fire({
    title: title,
    text: text,
    icon: "error",
  });
}