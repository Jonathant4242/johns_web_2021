// header current date
const datefield = document.querySelector(".date")
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-Uk", { dateStyle: "full" }).format(
  now
);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;