document.getElementById("form").addEventListener("submit",
 async function (e) {
  e.preventDefault();
  const { name, email, message, phone_No } = e.target.elements;
  const data = {
    name: name?.value,
    email: email?.value,
    message: message?.value,
    phone_No: phone_No?.value,
  };
  console.log();

  const response = await fetch("http://localhost:3000/contactForm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
});
