function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";

  this.reset();
});
.contact-sub {
  margin-top: 10px;
  color: #555;
}

.contact-actions {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-card {
  background: white;
  padding: 30px 40px;
  border-radius: 14px;
  text-decoration: none;
  color: #111;
  font-size: 40px;
  width: 260px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card span {
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.contact-card small {
  display: block;
  font-size: 13px;
  color: gray;
  margin-top: 5px;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.15);
}



















