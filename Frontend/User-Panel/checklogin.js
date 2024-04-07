const ckeckUser = () =>{
    if(localStorage.getItem('uid')){
        return true
    }else{
        window.location.href = "login.html";
    }
}