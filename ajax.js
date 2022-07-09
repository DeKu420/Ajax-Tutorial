let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  xhr.open("GET", "Kevin.txt", true);
  xhr2.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
  xhr2.getResponseHeader("Content-type", "application/json");

  xhr.onprogress = function () {
    console.log("1st work On Progress");
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  xhr2.onprogress = function () {
    console.log("2nd work On Progress");
  };
  xhr2.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  params = `{"name":"Deku","salary":"90000","age"="20"}`;
  xhr.send(params);
  xhr2.send();
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      let str = "";
      for (key in obj.data) {
        str += `<li>${obj.data[key].employee_name}</li>`;
        console.log(key);
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
  console.log("fetching employees");
}
