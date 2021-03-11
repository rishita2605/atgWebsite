(function () {
    sessionStorage.setItem("checklogin", "0")

    //setting initial location
    $(".location-inp input").val("Noida, India")
    $(".join-mobile").text($(".join-text").text())

})();

$(".create-account-group .signup-btn").click(showSignup)
$(".floating-section .cross").click(hideSignup)
$(".floating-section .signin-btn").click(hideSignup)
$(".floating-section .signin-btn").click(showSignin)

$(".floating-section-login .cross-login").click(hideSignin)
$(".floating-section-login .signup-btn").click(hideSignin)
$(".floating-section-login .signup-btn").click(showSignup)

$(".floating-login-section-mobile .cross").click(hideMobSignin)
$(".floating-login-section-mobile .create-acc").click(showMobSignup)

$(".floating-section-mobile .cross").click(hideMobSignup)
$(".floating-section-mobile .signin-link").click(showMobSignin)

$(".mobile-edit-btn").click(editPost)

//join group func
$(".join-btn").click(joinGroup)
$(".join-mobile").click(joinMobGroup)

//follow button
$(".rec-btn").click(following)

function showSignup() {
    $(".floating-section").css("display", "flex")
    $("body").css("overflow", "hidden")
}

function hideSignup() {
    $(".floating-section").css("display", "none")
    $("body").css("overflow", "visible")
}

function showSignin() {
    $(".floating-section-login").css("display", "flex")
    $("body").css("overflow", "hidden")
}

function hideSignin() {
    $(".floating-section-login").css("display", "none")
    $("body").css("overflow", "visible")
}

function showMobSignin() {
    hideMobSignup()
    $(".floating-login-section-mobile").css("display", "flex")
    $("body").css("overflow", "hidden")
}

function hideMobSignin() {
    $(".floating-login-section-mobile").css("display", "none")
    $("body").css("overflow", "visible")
}

function showMobSignup() {
    hideMobSignin()
    $(".floating-section-mobile").css("display", "flex")
    $("body").css("overflow", "hidden")
}

function hideMobSignup() {
    $(".floating-section-mobile").css("display", "none")
    $("body").css("overflow", "visible")
}

function joinGroup() {
    var chk = sessionStorage.getItem("checklogin")
    console.log(typeof (chk))

    if ($(".join-text").text().toLowerCase() == "join group") {
        if (chk == 0) {
            window.scrollTo(0, 0)
            showSignin()
        } else {
            $(".join-btn").removeClass("btn-primary")
            $(".join-btn").addClass("btn-outline-secondary")
            $(".join-btn i").removeClass("fa-user-plus")
            $(".join-btn i").addClass("fa-sign-out-alt")
            $(".join-text").text("Leave Group")

            $(".join-mobile").text($(".join-text").text())
            /*<i class="fas fa-sign-out-alt"></i>*/

        }
    } else {
        $(".join-btn").removeClass("btn-outline-secondary")
        $(".join-btn").addClass("btn-primary")
        $(".join-btn i").removeClass("fa-sign-out-alt")
        $(".join-btn i").addClass("fa-user-plus")
        $(".join-text").text("Join Group")

        $(".join-mobile").text($(".join-text").text())
    }

}

function joinMobGroup() {

    var chk = sessionStorage.getItem("checklogin")
    if ($(".join-mobile").text().toLowerCase() == "join group") {
        if (chk == 0) {
            window.scrollTo(0, 0)
            showMobSignin()
        } else {
            $(".join-mobile").text("Leave Group")
            joinGroup()
        }
    } else {
        $(".join-mobile").text("Join Group")
        joinGroup()
    }
}

function editPost() {
    var chk = sessionStorage.getItem("checklogin")
    if (chk == 0) {
        window.scrollTo(0, 0)
        showMobSignin()
    } 
}

function following(evt){
    console.log(evt.target)
    elem=evt.target
    if($(elem).text().toLowerCase()=="follow"){
        $(elem).css("background-color","rgb(0,0,0)")
        $(elem).css("color","rgb(255,255,255)")
        $(elem).text("Following")
    }
    else{
        $(elem).css("background-color","#d9d9db")
        $(elem).css("color","rgb(0,0,0)")
        $(elem).text("Follow")
    }
}