(function () {
    sessionStorage.setItem("checklogin", "1")

    $(".location-inp input").val("Noida, India")

})();

$(".create-account-group .signup-btn").click(showSignup)
$(".floating-section .cross").click(hideSignup)
$(".floating-section .signin-btn").click(hideSignup)
$(".floating-section .signin-btn").click(showSignin)

$(".floating-section-login .cross-login").click(hideSignin)
$(".floating-section-login .signup-btn").click(hideSignin)
$(".floating-section-login .signup-btn").click(showSignup)

//join group func
$(".join-btn").click(joinGroup)
$(".join-mobile").click(joinMobGroup)

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
            /*<i class="fas fa-sign-out-alt"></i>*/

        }
    } else {
        $(".join-btn").removeClass("btn-outline-secondary")
        $(".join-btn").addClass("btn-primary")
        $(".join-btn i").removeClass("fa-sign-out-alt")
        $(".join-btn i").addClass("fa-user-plus")
        $(".join-text").text("Join Group")
    }

}