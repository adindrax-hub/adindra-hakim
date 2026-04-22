document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mahasiswaForm');
    const tableRows = document.querySelectorAll('#courseTable tbody tr');

    // 1. Logika Klik Tabel (Highlight Row)
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // Hapus class aktif dari semua baris
            tableRows.forEach(r => r.style.backgroundColor = "");
            
            // Beri warna baris yang diklik
            row.style.backgroundColor = "#e7f3ff";
            console.log("Memilih mata kuliah: " + row.cells[1].innerText);
        });
    });

    // 2. Logika Submit Form
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;
        const isDisetujui = document.getElementById('disetujui').checked;

        if (!isDisetujui) {
            alert("Maaf, Anda harus mencentang kotak persetujuan sebelum mengirim.");
            return;
        }

        // Tampilkan konfirmasi
        const pesan = `Berhasil!\n\nNama: ${nama}\nTanggal: ${tanggal}\nStatus: Telah Disetujui`;
        alert(pesan);

        // Reset form setelah kirim
        form.reset();
    });
});