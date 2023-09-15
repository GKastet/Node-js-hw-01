const fs = require("fs/promises");
const path = require("path");
const uuid = require("uuid");

 const contactsPath = path.join(__dirname, "db", "contacts.json");
 const updateContacts = async(contactsArr) => await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
 

const listContacts = async() => {
  try{
    const data = await fs.readFile(contactsPath);        
    const contacts = JSON.parse(data)
    return contacts;
  }catch(error){
    console.log('listError:', error.message);
  }
}

const getContactById = async (contactId) => {
  try {
    const contactsArr = await listContacts();    
    const findedContact = await contactsArr.find(contact => contact.id === contactId);    
    return findedContact || null;
  }catch(error){
    console.log('getByIdError:', error.message);
  }
}

const removeContact = async(contactId) => {
  try{
    const contactsArr = await listContacts();
    const index = contactsArr.findIndex(contact => contact.id === contactId);

    if(index === -1){
      return null;
    }

    const [result] = contactsArr.splice(index, 1);
    await updateContacts(contactsArr);
    return result;
  }catch(error){
    console.log('removeError:', error.message);
  }
}

const addContact = async(data)=>{
  try{
    const contactsArr = await listContacts();
    const newContact = {
      id: uuid.v4(),    
      ...data,
    }    
    contactsArr.push(newContact);
    await updateContacts(contactsArr);
    return newContact;
  }catch(error){
    console.log('addError:', error.message);

  }

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}
