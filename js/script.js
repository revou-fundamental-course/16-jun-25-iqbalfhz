// Fungsi untuk menyapa pengguna berdasarkan waktu
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("nameModal");
  const modalBox = document.getElementById("modalBox");
  const input = document.getElementById("nameInput");
  const startBtn = document.getElementById("startBtn");
  const greetingEl = document.getElementById("greeting");

  // Tampilkan modal dengan animasi
  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);

  startBtn.addEventListener("click", () => {
    let name = input.value.trim();
    if (!name) name = "Guest";

    const hour = new Date().getHours();
    let timeGreeting = "";

    if (hour >= 5 && hour < 12) timeGreeting = "Good morning";
    else if (hour >= 12 && hour < 17) timeGreeting = "Good afternoon";
    else if (hour >= 17 && hour < 21) timeGreeting = "Good evening";
    else timeGreeting = "Good night";

    const message = `Hi ${name}, ${timeGreeting}, Welcome to NextGen Profile Site!`;
    greetingEl.textContent = message;

    // Tutup modal
    modalBox.classList.remove("scale-100", "opacity-100");
    modalBox.classList.add("scale-90", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  });
});

// Fungsi untuk menangani submit form dan tampilkan hasilnya
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("commentResult");

  if (form && result) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = form.nama.value;
      const tanggal = form.tanggal.value;
      const gender = form.gender.value;
      const email = form.email.value;
      const pesan = form.pesan.value;

      // Waktu lokal kirim
      const waktu = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
      };
      const waktuKirim = waktu.toLocaleString("id-ID", options);

      const output = `
      📝 <b>Data Kontak:</b><br>
      <strong>Nama:</strong> ${nama}<br>
      <strong>Tanggal Lahir:</strong> ${tanggal}<br>
      <strong>Jenis Kelamin:</strong> ${gender}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Pesan:</strong><br>${pesan.replace(/\n/g, "<br>")}<br><br>
      📅 <i>Pesan dikirim pada:</i> ${waktuKirim}`;

      result.innerHTML = output;
      form.reset();
    });
  }
});

// Update tahun di footer
document.getElementById("footerYear").textContent = new Date().getFullYear();
