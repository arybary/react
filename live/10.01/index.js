const saveUser = (userData) => {
  // input:String,obj
  // output: Promise
  console.log(JSON.stringify(userData));
  const httpPromise = fetch(
    "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    }

    // input callback
    // ---input promise result
    // --- output: Random
    // output: promise
  );
  httpPromise.then((respone) => {
    return respone.json();
    }).then(res=>{return alert(JSON.stringify(res))})
 
};
const user = { name: "Rafik", mail: "ary@jj.com", password: "65w44w" };
saveUser(user);
