const container = document.querySelector("container");
showhidepw = document.querySelectorAll(".showhidepw");
pwFields = document.querySelectorAll(".password");

showhidepw.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => {
      if (pwFields.type === "password") {
        pwFields.type = "text";
      } else {
        pwFields.type = "password";
      }
    });
  });
});
