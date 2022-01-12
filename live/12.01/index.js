const baseUrl = "https://61cdc8267067f600179c5c46.mockapi.io/obj";

const createUser = (user) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

const inputElem = document.querySelector("form");

const onCreateUser = () => {
  const userObj = Object.fromEntries(new FormData(inputElem));

  return createUser(userObj)
    .then((respone) => {
      return respone.json();
    })
    .then((res) => {
      return alert(JSON.stringify(res));
    });
};

const clickButton = document.querySelector(".submit-button");

const onInputChange = () => {
  const isValidForm = inputElem.reportValidity();
  isValidForm
    ? clickButton.removeAttribute("disabled")
    : clickButton.setAttribute("disabled", true);
};

inputElem.addEventListener("input", onInputChange);
clickButton.addEventListener("click", onCreateUser);
