document.addEventListener("DOMContentLoaded", () => {
    const toastEl = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
});