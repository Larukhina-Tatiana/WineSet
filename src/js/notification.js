const NOTIFICATION_DELAY = 3000;

const notification = document.querySelector(".js-alert");

notification.addEventListener("click", onNotificationClick);

shouNotification();

function onNotificationClick() {
  console.log("Click");

  hideNotification();
}

function shouNotification() {
  notification.classList.remove("visually-hidden");
  setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.add("visually-hidden");
}
