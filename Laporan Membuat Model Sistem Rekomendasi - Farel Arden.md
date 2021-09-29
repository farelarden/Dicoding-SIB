
# Laporan Membuat Model Sistem Rekomendasi - Farel Arden

## Project Overview
Berdasarkan [Wikipedia](https://id.wikipedia.org/wiki/Musik), musik adalah suara yang disusun sedemikian rupa sehingga mengandung irama, lagu, nada, dan keharmonisan terutama dari suara yang dihasilkan dari alat-alat yang dapat menghasilkan irama. Musik sudah menjadi bagian dari kehidupan kita. Kita mendengarkan musik kapan pun dan di mana saja, ketika kita pulang dari kantor, sambil belajar atau sambil tidur.

Berdasarkan studi dengan judul _Editorial: The Impact of Music on Human Development and Well-Being_ [tautan](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7315798/), musik memiliki pengaruh yang besar terhadap psikologi manusia. 

Melihat pentingnya dampak musik pada kehidupan kita, sistem rekomendasi pada musik adalah hal yang sangat penting. Kita tidak perlu terlalu lama mendengar setiap musik satu per satu, tetapi kita dapat mendapatkan musik - musik yang hampir mirip dengan musik - musik yang kita sudah dengar sebelumnya.

## Business Understanding

### Problem Statement
- Bagaimana cara membuat sistem yang dapat merekomendasikan lagu - lagu dari lagu - lagu yang pernah kita dengar sebelumnya?
- Bagaimana cara mendapatkan lagu - lagu yang memiliki genre yang sama dari lagu - lagu yang kita dengar sebelumnya?

### Goals
- Mengetahui cara membuat sistem yang dapat merekomendasikan lagu - lagu dari lagu - lagu yang pernah kita dengar sebelumnya
- Mengetahui cara mendapatkan lagu - lagu yang memiliki genre yang sama dari lagu - lagu yang kita dengar sebelumnya

### Solution Approach
Dalam melaksanakan proyek ini, saya menggunakan **Content Based Filtering**
Content Based Filtering adalah sistem rekomendasi yang merekomendasikan item sesuai dengan item yang disukai oleh pengguna di masa lampau.

Content Based mempelajari profil dan perilaku dari pengguna yang kemudian dari informasi tersebut dianalisa dan diproses sehingga menghasilkan sistem rekomendasi yang baik. Semakin banyak informasi yang diberikan ke sistem ini, maka sistem rekomendasi berbasis content based akan memiliki akurasi yang lebih baik.

Ada 2 informasi yang penting dalam sistem rekomendasi berbasis Content Based Filtering:
- Model preferensi pengguna
- Riwayat interaksi pengguna 

Kelebihan pada Content Based Filtering  dibandingkan dengan Collaborative Filtering:
Sistem rekomendasi dapat merekomendasikan item - item berdasarkan sejarah dari pengguna yang di mana setiap pengguna memiliki preferensinya masing - masing, sehingga Content Based Filtering dapat memberikan rekomendasi item yang subjektif dan tepat dengan pengguna.

Kekurangan pada Content Based Filtering  dibandingkan dengan Collaborative Filtering:
Sistem rekomendasi tidak dapat merekomendasikan item - item secara objektif, karena sistem rekomendasi Content Based Filtering memiliki bias terhadap riwayat profil dan perilaku pengguna.

## Data Understanding

Dataset ini memiliki 18 variabel. Berikut adalah penjelasan mengenai variabel - variabel tersebut:

- **genre** (Datatype: string): 
 Daftar genre yang dikaitkan dengan artis
- **artist_name** (Datatype: string): 
 Nama artis
- **track_name** (Datatype: string): 
 Judul lagu
- **track_id** (Datatype: string): 
 ID lagu
- **popularity** (Datatype:int ): 
 Popularitas lagu. Nilainya antara 0 dan 100, dengan 100 menjadi yang paling populer.
- **acousticness** (Datatype: float): 
 Memiliki ukuran kepercayaan dari 0,0 hingga 1,0 apakah trek tersebut tergolong akustik. 1.0 mewakili keyakinan tinggi bahwa trek tersebut tergolong akustik.
- **danceability** (Datatype: float): 
 Danceability menggambarkan seberapa cocok trek untuk menari berdasarkan kombinasi elemen musik termasuk tempo, stabilitas ritme, kekuatan ketukan, dan keteraturan keseluruhan. Nilai 0,0 paling tidak dapat menari dan 1,0 paling dapat menari.
- **duration_ms** (Datatype: int): 
 Durasi trek dalam milidetik.
- **energy** (Datatype: float): 
 Energi adalah ukuran dari 0,0 hingga 1,0 dan mewakili ukuran persepsi intensitas dan aktivitas. Biasanya, trek energik terasa cepat, keras, dan berisik memiliki nilai 1,0
- **instrumentalness** (Datatype: float): 
 Memprediksi apakah trek tidak berisi vokal. Rap atau trek kata yang diucapkan jelas “vokal”. Semakin dekat nilai instrumental menjadi 1,0, semakin besar kemungkinan trek tersebut tidak berisi konten vokal.
- **key** (Datatype: int): 
Kunci trek tersebut. Integer memetakan ke pitch menggunakan notasi Kelas Pitch standar. Misalnya. 0 = C, 1 = C♯/D, 2 = D, dan seterusnya.
- **liveness** (Datatype:float ): Mendeteksi kehadiran penonton dalam rekaman. Nilai keaktifan yang lebih tinggi menunjukkan peningkatan kemungkinan bahwa trek ditampilkan secara langsung. Nilai di atas 0,8 memberikan kemungkinan yang kuat bahwa trek itu hidup.
- **loudness** (Datatype: float): 
 Kenyaringan keseluruhan trek dalam desibel (dB). Nilai kenyaringan dirata-ratakan di seluruh trek dan berguna untuk membandingkan kenyaringan relatif trek. Kenyaringan adalah kualitas suara yang merupakan korelasi psikologis utama dari kekuatan fisik (amplitudo). Nilai tipikal berkisar antara -60 dan 0 db.
- **mode** (Datatype: int): 
 Mode menunjukkan modalitas (mayor atau minor) dari sebuah trek, jenis tangga nada dari mana konten melodinya berasal. Mayor diwakili oleh 1 dan minor adalah 0.
- **speechiness** (Datatype: float): 
 Speechiness mendeteksi keberadaan kata-kata yang diucapkan di trek. Semakin eksklusif rekaman seperti pidato (misalnya acara bincang-bincang, buku audio, puisi), semakin mendekati 1,0 nilai atributnya.
- **tempo** (Datatype: float): 
 Perkiraan tempo keseluruhan trek dalam ketukan per menit (BPM).
- **time_signature** (Datatype: int): 
 Perkiraan tanda waktu keseluruhan trek

