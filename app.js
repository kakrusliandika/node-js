const validator = require("validator");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for name input
function inputNama(callback) {
  rl.question("Masukan Nama Anda: ", (nama) => {
    if (nama.trim() === "") {
      console.log("Nama tidak boleh kosong.");
      return inputNama(callback); // Retry input if invalid
    }
    callback(nama);
  });
}

// Function to prompt for email input with validation
function inputEmail(callback) {
  rl.question("Email: ", (email) => {
    if (!validator.isEmail(email)) {
      console.log("Email tidak valid.");
      return inputEmail(callback); // Retry input if invalid
    }
    callback(email);
  });
}

// Function to prompt for phone number input with validation
function inputNoHP(callback) {
  rl.question("No. Hp: ", (nohp) => {
    if (!validator.isMobilePhone(nohp, "id-ID")) {
      // Assuming Indonesian format
      console.log("No. Hp tidak valid.");
      return inputNoHP(callback); // Retry input if invalid
    }
    callback(nohp);
  });
}

// Main function to collect inputs and save to file
function main() {
  inputNama((nama) => {
    inputEmail((email) => {
      inputNoHP((nohp) => {
        const contact = { nama, email, nohp };

        // Read existing contacts from the file
        let saveFile = [];
        try {
          if (fs.existsSync("file/app-contacts.json")) {
            const file = fs.readFileSync("file/app-contacts.json", "utf-8");
            saveFile = JSON.parse(file);
          }
        } catch (err) {
          console.error("Error reading file:", err);
        }

        // Add new contact and save to file
        saveFile.push(contact);
        try {
          fs.writeFileSync(
            "file/app-contacts.json",
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
}

// Run the main function
main();
