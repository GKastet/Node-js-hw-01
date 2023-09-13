const date = new Date();
// console.log('Wellcome to Node.js!');
// console.log(`Year: ${date.getFullYear()}` );

// const fs = require("fs/promises");

// const readFile = async() => {
//     const data = await fs.readFile('./db/text.txt');
//     console.log(data);
//   }
//   readFile()

const {listContacts} = require('./contacts')
const {getContactById} = require('./contacts')
const listOfContacts = listContacts()
const contactById = getContactById("drsAJ4SHPYqZeG-83QTVW")
 console.log(listOfContacts);
 console.log(contactById);
