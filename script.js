
/* Register service worker */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("serviceworker.js")
        .then(registration => {
            console.log("SW Registered!");
            console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}

/* Ask for notification permission */

let enableNotificationsButtons = document.querySelectorAll(".enable-notifications");

function askForNotificationPermission() {
    Notification.requestPermission(function(result){
        console.log('User Choice', result);
        if (result !== 'granted') {
            console.log('No notification permission granted!');
        } else {
            console.log('Notification permission granted!');  
        }
    });
}
if('Notification' in window) {
    for(let i = 0; i < enableNotificationsButtons.length; i++) {
        enableNotificationsButtons[i].style.display = "inline-block";
        enableNotificationsButtons[i].addEventListener("click", askForNotificationPermission);
    }
}