function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mahmoudtarbolsi@gmail.com",
        Password : "0DD50766284C7B56D69A4852482ACEE87C3C",
        To : 'LavenderMagazine24@gmail.com',
        From : "mahmoudtarbolsi@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}