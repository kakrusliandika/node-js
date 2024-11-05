//Readline
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan Nama Anda: ", (nama) => {
  rl.question("Umur: ", (umur) => {
    rl.question("Alamat: ", (alamat) => {
      const contact = { nama, umur, alamat };

      // Check if the file exists and read the content
      let saveFile = [];
      try {
        if (fs.existsSync("file/contacts.json")) {
          const file = fs.readFileSync("file/contacts.json", "utf-8");
          saveFile = JSON.parse(file);
        }
      } catch (err) {
        console.error("Error reading file:", err);
      }

      // Add the new contact
      saveFile.push(contact);

      // Write the updated content to the file
      try {
        fs.writeFileSync(
          "file/contacts.json",
          JSON.stringify(saveFile, null, 2)
        );
        console.log(`Terima Kasih ${nama}, Sudah Memasukan Data.`);
      } catch (e) {
        console.error("Error writing to file:", e);
      }

      rl.close();
    });
  });
});
