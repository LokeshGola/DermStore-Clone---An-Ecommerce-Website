
let form=document.querySelector('form')
form.addEventListener("submit", signUpData );

function signUpData(event){
    event.preventDefault();

    let Name= form.name.value;
    let Email=  form.email.value ;
    let Confirm_Email= form.confirm_email.value ;
    let Pass= form.password.value ;
    let Confirm_Pass= form.confirm_password.value ;
    let Phone= form.number.value ;

    if(Name=="" || Email=="" || Confirm_Email =="" ||  Pass =="" ||  Confirm_Pass=="" ||   Phone=="" ){
       alert("fill the form completely")
    }
    else if(Email !==Confirm_Email ) {
       alert(" email and confirm email does not match ")
    }
    else if(Pass !==Confirm_Pass){
         alert ("password and confirm password does not match")
    }
    else{

       let obj={
           name: Name,
           email: Email ,
           confirm_email: Confirm_Email,
           password: Pass,
           confirm_password: Confirm_Pass,
           number: Phone,
       };

        let SignUp_data_array=  JSON.parse(localStorage.getItem("signup_data"))|| []
        SignUp_data_array.push(obj)
       localStorage.setItem("signup_data", JSON.stringify(SignUp_data_array))
       console.log(SignUp_data_array)

       alert("signing up is successful ")
       window.location.replace('index.html');
    }
}
