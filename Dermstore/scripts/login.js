

  let form= document.querySelector('form');
    form.addEventListener("submit", login)

    function login(event){
        event.preventDefault();

        let Email = form.email.value
        let Pass=form.password.value;
        let obj={
            email:Email,
            password:Pass,
        }
        let loginArr=[]
        loginArr.push(obj)

        if(checkData(obj)){
            alert("login successfull, Welcome to Dermstore")
            window.location.replace('index.html');

        }
        else{
            alert("not found")
        }
    }
    function checkData(obj){
        let dataFromLS=JSON.parse(localStorage.getItem("signup_data")) || []
        for(let i=0;i<dataFromLS.length;i++){
            if(dataFromLS[i].email==obj.email && dataFromLS[i].password==obj.password){
            return true;
           }
        }                 
    }

