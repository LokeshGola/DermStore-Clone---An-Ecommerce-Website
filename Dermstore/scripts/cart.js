

    let dataFromLs=JSON.parse(localStorage.getItem("add_to_cart")) || []

    showData(dataFromLs)
    function showData(dataArr){
        dataArr.forEach(function(el){

            let Image = document.createElement('img');
            Image.src=el.image

            let des=document.createElement("p");
            des.innerText=el.description;

            let div = document.createElement('div');
            div.append(Image,des)

            let td1 = document.createElement('td');
            td1.append(div)
            td1.setAttribute("class","item ")

            let td2 = document.createElement('td');
           td2.innerText=el.price

            let td3 = document.createElement('td');
            td3.innerText="1"
           
            let td4 = document.createElement('td');
            td4.innerText=el.price;
           
            let tr = document.createElement('tr');
            tr.append(td1,td2,td3,td4);

            document.querySelector('tbody').append(tr);

        console.log(td2.innerText)
        })
    }
