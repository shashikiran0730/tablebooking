var details=[]
function mobile(){
    details=[]
    var mobilenumber=window.prompt("plz enter mobile number")
     while(isNaN(mobilenumber)){
        alert("plz enter valid number")
        mobilenumber=window.prompt("plz enter mobile number")
     }
    console.log(mobilenumber)
    window.location.href = 'home.html'
    }

function addtocart(){
c=(document.getElementById('buttons')).value;
if(c=='Add'){
    window.alert(('Oredered Sucessfully'))
    c=(document.getElementById('itemname')).value;
 details.push(c)
 itemprice=(document.getElementById('itemprice')).value;
 details.push(itemprice)
 console.log(details)
}
else{
   window.alert('Removed Succesfully')
}

}
function display(){
   document.write(details)
}