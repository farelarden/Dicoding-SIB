
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

- 
