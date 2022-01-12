const baseUrl = "https://61cdc8267067f600179c5c46.mockapi.io/obj";

const inputElem = document.querySelector("form");

const onCreateUser = (event) => {
  event.preventDefault();
  const userObj = Object.fromEntries(new FormData(inputElem));

  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userObj),
  })
    .then((respone) => {
      return respone.json();
    })
    .then((res) => {
      alert(JSON.stringify(res));
      inputElem.reset();
    });
};

const clickButton = document.querySelector(".submit-button");

const onInputChange = () => {
  if (inputElem.reportValidity()) {
    submitButtonElem.removeAttribute("disabled");
  } else {
    submitButtonElem.setAttribute("disabled", true);
  }
};

inputElem.addEventListener("input", onInputChange);
clickButton.addEventListener("click", onCreateUser);
