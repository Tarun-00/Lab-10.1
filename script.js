let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

function processContacts(callback) {
  contacts.forEach((contact) => callback(contact));
}

const displayContact = (contact) => {
  const contactList = document.getElementById("contactList");
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;
  contactList.appendChild(li);
};

setTimeout(() => processContacts(displayContact), 1000);

function isValidPhoneNumber(phone) {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function addContact() {
  do {
    const name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone number (digits only):");
    let email = prompt("Enter contact email:");

    while (!isValidPhoneNumber(phone)) {
      alert("Invalid phone number. Please enter digits only.");
      phone = prompt("Enter contact phone number (digits only):");
    }

    while (!isValidEmail(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      email = prompt("Enter contact email:");
    }

    if (name && phone && email) {
      contacts.push({ name, phone, email });
      updateContactList();
    } else {
      alert("Please fill in all fields.");
    }
  } while (confirm("Do you want to add another contact?"));
}

function updateContactList() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";
  setTimeout(() => processContacts(displayContact), 500);
}

function findContact() {
  const name = prompt("Enter the contact name to find:");
  const foundContact = searchContactByName(name, 0);
  if (foundContact) {
    alert(
      `Found: ${foundContact.name} - ${foundContact.phone} - ${foundContact.email}`
    );
  } else {
    alert("Contact not found.");
  }
}

const searchContactByName = (name, index) => {
  if (index >= contacts.length) return null;
  if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
    return contacts[index];
  }
  return searchContactByName(name, index + 1);
};

setInterval(() => {
  document.body.style.backgroundColor = getRandomColor();
}, 5000);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

setInterval(() => {
  console.log(`Total contacts: ${contacts.length}`);
}, 5000);
