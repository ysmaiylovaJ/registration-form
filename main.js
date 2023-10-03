let contacts = [];

// Функция для создания юзера
function createContact(name, email, phone, imageUrl) {
    const contact = {
        name: name,
        email: email,
        phone: phone,
        imageUrl: imageUrl
    };

    contacts.push(contact);
}

// Функция для вывода списка контактов
function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
            <h3>${contact.name}</h3>
            <p>Email: ${contact.email}</p>
            <p>Телефон: ${contact.phone}</p>
            <img src="${contact.imageUrl}" alt="Изображение контакта">
            <button onclick="editContact('${contact.name}')">Редактировать</button>
            <button onclick="deleteContact('${contact.name}')">Удалить</button>
        `;

        contactList.appendChild(contactDiv);
    });
}

// Функция для редактирования контакта
function editContact(name) {
    const contact = contacts.find(contact => contact.name === name);

    if (contact) {
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const imageUrlInput = document.getElementById('imageUrlInput');

        nameInput.value = contact.name;
        emailInput.value = contact.email;
        phoneInput.value = contact.phone;
        imageUrlInput.value = contact.imageUrl;

        // Удаляем редактируемый контакт из массива
        contacts = contacts.filter(contact => contact.name !== name);
    }
}

  // Функция для удаления контакта
  function deleteContact(name) {
    contacts = contacts.filter(contact => contact.name !== name);
    displayContacts();
}

// Обработчик отправки формы
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const imageUrlInput = document.getElementById('imageUrlInput');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const imageUrl = imageUrlInput.value;

    createContact(name, email, phone, imageUrl);
    displayContacts();

    // Очищаем поля формы
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    imageUrlInput.value = '';
});