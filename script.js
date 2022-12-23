const container = document.querySelector("container");
showhidepw = document.querySelectorAll(".showhidepw");
pwFields = document.querySelectorAll(".password");

showhidepw.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => {
      if (pwFields.type === "password") {
        pwFields.type = "text";
        showhidepw.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwFields.type = "password";

        showhidepw.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
