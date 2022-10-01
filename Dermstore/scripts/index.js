
    let Navbar_bottom=["Brands", "Browse By", "Bestsellers", "Skin Care", "Makeup", "Hair Care", "Bath & Body", "The fragrance Shop", "Tools & Divices", "Gifts & Sets", "BeautyFix", "Offers", "New" ]
    
    navbarBottom (Navbar_bottom)
   function navbarBottom (array){
        array.forEach(function(el) {
            const navbarBottom_divs = document.createElement('div');
            navbarBottom_divs.innerText=el;
            document.querySelector('#navbar >div +div').append( navbarBottom_divs);   
        });   
   }
   
    let upper_strip_banner=[ "FREE US Shipping $50+", "New Customers Save 15%*",  "Dermstore Rewards",  "Ask The Esthetician"
    , " Download Our App",  "Refer a Friend, Get $15"]

    upper_strip(upper_strip_banner)
  function upper_strip (array){

    array.forEach(function(el) {
        const strip_divs = document.createElement('div');
        strip_divs.innerText=el;
        document.querySelector('#upper_strip_banner').append( strip_divs);   
    });
  }

    //slideshow
        let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }


   // Bestsellers
let array=[ { 
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/11289609-8744892770898772.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$169.00",
},
{
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/13315093-7444974668249790.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$165.00",
},
{
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/13812005-4724980887145978.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$160.00",
},
{
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/11291543-2074864291141689.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$169.00",
},
{
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/12664555-1704871739992403.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$165.00",
},{
    imageLink: "https://static.thcdn.com/images/small/webp//productimg/original/11290635-9174978287699645.jpg",
    para: "SkinCeuticals C E Ferulic (1 fl. oz.)",
    border_para: "$22 SkinCeuticals Gift",
    price: "$160.00",
}
]
     bestsellers(array)
   function bestsellers(arr){

    arr.forEach(function(el){

        let image = document.createElement('img');
        image.src=el.imageLink

        let Para = document.createElement('p');
       Para.innerText=el.para

        let paraWithBorder = document.createElement('p');
        paraWithBorder.innerText=el.border_para

        let borderDiv = document.createElement('div');
        borderDiv.append(paraWithBorder)

        let rating = document.createElement('p');
        rating.innerText="****4610"

        let Price = document.createElement('p');
       Price.innerText=el.price

        let btn = document.createElement('button');
        btn.innerText="QUICK BUY"

        let boxDiv = document.createElement('div')      
        boxDiv.append(image,Para,borderDiv,rating,Price,btn);

       document.querySelector('#bestSellerDivs').append( boxDiv);
    //    console.log(boxDiv)
    })
      
   }

//    2nd slide code starts here

     slideIndex = 1;
    ShowSlides(slideIndex);

    // Next/previous controls
    function PlusSlides(n) {
       ShowSlides(slideIndex += n);
    }
    // Thumbnail image controls
    function CurrentSlide(n) {
       ShowSlides(slideIndex = n);
    }

    function ShowSlides(n) {
        let i;
        let slides = document.getElementsByClassName("child_Slider_2");
        let dots = document.getElementsByClassName("Dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    } 
