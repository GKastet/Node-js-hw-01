const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, "db", "contacts.json");
// const contactsPath = path.join(__dirname, "contacts.json");

const readFileStart = async() => {
  const data = await fs.readFile('./db/text.txt', 'utf-8');
  // const data = (await fs.readFile('./db/text.txt'));
  //  console.log(data.toString());
   console.log(data);
}

const listContacts = async() => {
  try{
    const data = await fs.readFile('./db/contacts.json', 'utf-8');    
    // console.log(data);
    const contacts = JSON.parse(data)
    return contacts;
  }catch(error){
    console.log(error.message);
  }
}

const getContactById = async (contactId) => {
  try {
    const contactsArr = await listContacts();
    //console.log(contactsArr);    
    const findedContact = await contactsArr.find(contact => contact.id === contactId);
    console.log(findedContact);
    return findedContact;
  }catch(error){
    console.log(error);
  }
}

module.exports = {listContacts, getContactById}

// Функція для отримання списку контактів
// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, "utf-8");
//     const contacts = JSON.parse(data);
//     return contacts;
//   } catch (error) {
//     throw error;
//   }
// }
// Функція для отримання контакта по ID
// async function getContactById(contactId) {
//   try {
//     const contacts = await listContacts();
//     const contact = contacts.find((c) => c.id === contactId);
//     return contact;
//   } catch (error) {
//     throw error;
//   }
// }

// Функція для видалення контакта по ID
// async function removeContact(contactId) {
//   try {
//     const contacts = await listContacts();
//     const updatedContacts = contacts.filter((c) => c.id !== contactId);
//     await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
//   } catch (error) {
//     throw error;
//   }
// }

// Функція для додавання нового контакта
// async function addContact(name, email, phone) {
// async function addContact(contact) {
//   try {
//     const contacts = await listContacts();
//     contacts.push(contact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return contact;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = { listContacts, getContactById, addContact, removeContact };

// Цей код включає чотири функції:

// listContacts(): Отримує список всіх контактів з файлу contacts.json.
// getContactById(contactId): Отримує контакт за заданим ID.
// addContact(contact): Додає новий контакт до колекції.
// removeContact(contactId): Видаляє контакт за заданим ID.
// Ці функції використовують fs.promises.readFile() для зчитування даних з файлу та fs.promises.writeFile() для запису оновленої колекції контактів назад у файл. Таким чином, ви можете використовувати ці функції для роботи з вашою колекцією контактів.

// const contacts = [
//     {
//       "id": "AeHIrLTr6JkxGE6SN-0Rw",
//       "name": "Allen Raymond",
//       "email": "nulla.ante@vestibul.co.uk",
//       "phone": "(992) 914-3792"
//     },
//     {
//       "id": "qdggE76Jtbfd9eWJHrssH",
//       "name": "Chaim Lewis",
//       "email": "dui.in@egetlacus.ca",
//       "phone": "(294) 840-6685"
//     },
//     {
//       "id": "drsAJ4SHPYqZeG-83QTVW",
//       "name": "Kennedy Lane",
//       "email": "mattis.Cras@nonenimMauris.net",
//       "phone": "(542) 451-7038"
//     },
//     {
//       "id": "vza2RIzNGIwutCVCs4mCL",
//       "name": "Wylie Pope",
//       "email": "est@utquamvel.net",
//       "phone": "(692) 802-2949"
//     },
//     {
//       "id": "05olLMgyVQdWRwgKfg5J6",
//       "name": "Cyrus Jackson",
//       "email": "nibh@semsempererat.com",
//       "phone": "(501) 472-5218"
//     },
//     {
//       "id": "1DEXoP8AuCGYc1YgoQ6hw",
//       "name": "Abbot Franks",
//       "email": "scelerisque@magnis.org",
//       "phone": "(186) 568-3720"
//     },
//     {
//       "id": "Z5sbDlS7pCzNsnAHLtDJd",
//       "name": "Reuben Henry",
//       "email": "pharetra.ut@dictum.co.uk",
//       "phone": "(715) 598-5792"
//     },
//     {
//       "id": "C9sjBfCo4UJCWjzBnOtxl",
//       "name": "Simon Morton",
//       "email": "dui.Fusce.diam@Donec.com",
//       "phone": "(233) 738-2360"
//     },
//     {
//       "id": "e6ywwRe4jcqxXfCZOj_1e",
//       "name": "Thomas Lucas",
//       "email": "nec@Nulla.com",
//       "phone": "(704) 398-7993"
//     },
//     {
//       "id": "rsKkOQUi80UsgVPCcLZZW",
//       "name": "Alec Howard",
//       "email": "Donec.elementum@scelerisquescelerisquedui.net",
//       "phone": "(748) 206-2688"
//     }
//   ]

//   const users ={
//     contacts,
//   }

//   module.exports = users;
