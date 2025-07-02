function greetUser() {
  const name = prompt("Masukkan nama Anda:");
  const greeting = document.getElementById("greeting");
  if (name) {
    greeting.textContent = `Hi ${name}, Welcome to Website`;
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = e.target.nama.value;
  const tanggal = e.target.tanggal.value;
  const gender = e.target.gender.value;
  const pesan = e.target.pesan.value;
  const waktu = new Date().toString();

  const hasil =
    `Current time : ${waktu}\n\n` +
    `Nama : ${nama}\n` +
    `Tanggal Lahir : ${tanggal}\n` +
    `Jenis Kelamin : ${gender}\n` +
    `Pesan : ${pesan}`;

  document.getElementById("commentResult").textContent = hasil;
});
