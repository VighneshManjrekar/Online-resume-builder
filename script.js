function submit(){
    var cname = document.getElementById('name').value
    var email = document.getElementById('Email').value
    var con = document.getElementById('con').value
    var address = document.getElementById('address').value
    var experience = document.getElementById('experience').value
    var education = document.getElementById('education').value
    var skill = document.getElementById('skill').value
    var ref = document.getElementById('ref').value
    sessionStorage.setItem('name',cname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('contact', con);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('experience', experience);
    sessionStorage.setItem('education', education);
    sessionStorage.setItem('skill', skill);
    sessionStorage.setItem('reference', ref);
    console.log("value set")
    window.location.href = "resume.html"
}