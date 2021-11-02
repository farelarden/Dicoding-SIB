# Laporan Membuat Model Sistem Rekomendasi - Farel Arden

## Project Overview
Berdasarkan salah satu artikel dari Universitas Hasanuddin [tautan](https://journal.unhas.ac.id/index.php/jupiter/article/view/1672), membaca buku merupakan hal yang penting untuk dilakukan. Orang - orang yang memilih untuk sering membaca buku memiliki wawasan yang luas. Lewat membaca, kita juga dapat mengetahui, mengenal banyak hal yang sebelumnya belum dikenal dan kita pelajari dan pahami lewat membaca buku.

Melihat pentingnya dampak buku bagi kehidupan kita, kita perlu banyak membaca buku. Ketika kita membaca buku, kita pasti memiliki ketertarikan kepada satu atau beberapa bidang. Dikarenakan banyaknya buku yang telah dan akan terbit, kita membutuhkan sistem rekomendasi yang akan menyaring buku - buku sesuai dengan selera dan ketertarikan kita. Dengan adanya sistem rekomendasi ini, kita tidak perlu lama - lama dalam mencari buku sesuai ketertarikan kita.

Kita akan menyelesaikan masalah ini dengan content filtered based yang berasal dari rating para pengguna dan content filtered based recommendation system yang berasal dari penulis buku yang sama. 

## Business Understanding

### Problem Statement
- Bagaimana cara membuat sistem yang dapat merekomendasikan buku - buku dari buku - buku yang pernah kita baca sebelumnya?
- Bagaimana cara mendapatkan rekomendasi buku - buku yang memiliki penulis buku yang sama?

### Goals
- Mengetahui cara membuat sistem yang dapat merekomendasikan buku - buku dari buku - buku yang pernah kita baca sebelumnya.
- Mengetahui cara mendapatkan buku - buku yang ditulis oleh penulis yang sama dengan buku - buku yang pernah kita baca sebelumnya.

### Solution Approach
Dalam melaksanakan proyek ini, saya menggunakan Content Based Filtering dan Collaborative Based Filtering

**Content Based Filtering**
Content Based Filtering adalah sistem rekomendasi yang merekomendasikan item sesuai dengan item yang disukai oleh pengguna di masa lampau.

Content Based mempelajari profil dan perilaku dari pengguna yang kemudian dari informasi tersebut dianalisa dan diproses sehingga menghasilkan sistem rekomendasi yang baik. Semakin banyak informasi yang diberikan ke sistem ini, maka sistem rekomendasi berbasis content based akan memiliki akurasi yang lebih baik.

Ada 2 informasi yang penting dalam sistem rekomendasi berbasis Content Based Filtering:
- Model preferensi pengguna
- Riwayat interaksi pengguna 

Kelebihan pada Content Based Filtering  dibandingkan dengan Collaborative Filtering:
Sistem rekomendasi dapat merekomendasikan item - item berdasarkan sejarah dari pengguna yang di mana setiap pengguna memiliki preferensinya masing - masing, sehingga Content Based Filtering dapat memberikan rekomendasi item yang subjektif dan tepat dengan pengguna.

Kekurangan pada Content Based Filtering  dibandingkan dengan Collaborative Filtering:
Sistem rekomendasi tidak dapat merekomendasikan item - item secara objektif, karena sistem rekomendasi Content Based Filtering memiliki bias terhadap riwayat profil dan perilaku pengguna.

Pada Content Based Filtering, saya akan membuat sistem rekomendasi yang berpusat pada penulis buku, sehingga pengguna akan mendapatkan hasil rekomendasi berdasarkan penulis buku yang telah dibaca oleh pengguna.

**Collaborative Based Filtering**
Collaborative Based Filtering adalah sistem rekomendasi berdasarkan pendapat suatu komunitas.
Pada Collaborative Based Filtering terdapat 2 kategori:
* Metode Berbasis Memori:
  Metode berbasis model merupakan metode di mana kita memprediksi prefresensi pengguna dari database atau sample dari pengguna lainnya. 
  Pada model berbasis memori terdapat 2 kategori, yaitu user based dan item based.
* Metode Berbasis Model:
  Metode berbasis model cukup menarik, karena di metode ini kita mengambil informasi dari kumpulan data yang kemudian diolah untuk menentukan model probabilitas untuk membuat rekomendasi. 
  Pada model berbasis model terdapat 3 kategori, yaitu Cluster-based Algorithm, Matrix factorization, dan Deep Learning

Kelebihan pada Collaborative Based Filtering bila dibandingkan dengan Content Based Filtering adalah pengguna dapat mengeksplorasi item atau konten di luar preferensi pengguna. Pengguna pun juga dapat mendapat rekomendasi sesuai dengan kecenderungan publik yang dianalisa lewat penilaian pengguna - pengguna lainnya.

Kekurangan pada Collaborative Based Filtering adalah pengguna kurang mendapatkan rekomendasi sesuai preferensi pribadi. Konten - konten yang diberikan oleh sistem rekomendasi lebih banyak berasal dari preferensi publik dan bukan preferensi pribadi.

Pada Collaborative Based Filtering, saya menggunakan penilaian dari pengguna - pengguna untuk mendapatkan rekomendasi buku - buku.

## Data Understanding
Dataset untuk proyek ini dapat diunduh pada [tautan](https://www.kaggle.com/arashnic/book-recommendation-dataset)
Pada dataset kali ini, kita hanya akan menggunakan 2 buah dataframe, 2 dataframe itu adalah:
**Book.csv**:
- ISBN(String):
  Kolom ini merupakan ISBN (International Standard Book Number) untuk buku - buku yang terdaftar
- Book-Title(String):
  Kolom ini merupakan judul dari buku - buku yang terdaftar
- Book-Author(String):
  Kolom ini merupakan penulis dari buku - buku yang terdaftar
- Year-of-Publication(String):
  Kolom ini merupakan tahun terbitnya buku - buku yang terdaftar 
- Publisher(String):
  Kolom ini merupakan penerbit dari buku - buku yang tedaftar
- Image-URL-S(String):
  Kolom ini menrupakan tautan untuk gambar sampul berukuran kecil
- Image-URL-M(String):
  Kolom ini menrupakan tautan untuk gambar sampul berukuran sedang
- Image-ULR-L(String):
  Kolom ini menrupakan tautan untuk gambar sampul berukuran besar

**Ratings.csv**
- User-ID(String):
  Kolom ini merupakan ID dari para pengguna 
- ISBN(String):
  Kolom ini merupakan ISBN (International Standard Book Number) untuk buku - buku yang terdaftar
- Book-Rating(int):
  Kolom ini merupakan penilaian dari pengguna terhadap suatu buku 

Berikut adalah visualisasi data yang berasal dari kedua dataframe tersebut:
Perlu diketahui pada visualisasi data yang diberikan di bawah ini berasal dari sample data dan bukan berasal dari keseluruhan data yang diberikan, disebabkan oleh besarnya data yang ada.
**Univariate Data Analysis**
Pada univariate data analysis, kita akan melihat 2 barplot:
- Barplot Pertama
  ![Barplot Pertama](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/15.JPG))

    Pada barplot pertama, saya menganalisa rating yang berasal dari rating dataset. Ternyata banyak pengguna yang memberi penilian 0 pada buku - buku yang mereka telah baca. Penilian 0 dari 10 tetaplah valid, sehingga kita tidak dapat menganggap nilai 0 ini sebagai nilai NaN.
- Barplot Kedua
  ![Barplot Kedua](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/17.JPG)) 
    Pada barplot kedua, saya menganalisa tahun terbitnya buku, Ternyata banyak sekali buku yang terbit pada tahun 2002.
**Multivariate Data Analysis**
Pada multivariate data analysis, saya menggunakan pairplot pada rating dataset.
![pairplot](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/18.JPG))

## Data Preparation
Pada proses data preparation, saya hanya melakukan 2 hal sebelum masuk ke content dan collaborative based filtering:
- **Dropna**
  Dropna perlu digunakan dalam proses data preparation untuk membuang seluruh row yang memiliki NaN values. Sebuah model tidak dapat melakukan training apabila terdapat nilai NaN pada data latih. 
- **Drop Duplicates**
  Drop dulicates digunakan dalam proses data preparation untuk membuang data - data yang terduplikasi. Adanya data yang terduplikasi membuat model berlatih menggunakan data yang  berulang.

**Content Based Filtering**
Pada content Based Filtering, data preparation yang diperlukan ada 2, yaitu:
- **Dataframe dari buku menjadi sebuah list**
  Perubahan dari dataseries menjadi list dipenuhi dengan menggunakan .tolist() method. Proses ini diperlukan karena list ini akan digunakan pada tahap selanjutnya menjadi dictionary baru yg akan menjadi landasan pada sistem rekomendasi
- **Memasukkan List ke Dictionary**
  Setelah kita membuat list, kita perlu membuat dictionary yang digunakan untuk memnentukan pasangan key-value pada book_ISBN, book_title, book_author, dan book_year_of_publication. 

**Collaborative Based Filtering**
Data preparation yang diperlukan pada sistem collaborative based filtering dimulai dengan menyandikan user_id pada rating_dataset dan ISBN pada book_dataset menjadi integer.

Setelah disandikan, jumlah dari user_id dan ISBN tersebut akan disimpan pada num_users dan num_book.

- **Pembagian Data Train dan Data Valid**
  Setelah semua data sudah terkumpul, kita perlu membagi data tersebut menjadi data latih dan data validasi, namun sebelum itu kita perlu menarik sample dari dataset yang sudah ada.


## Modeling
**Content Based Filtering**
Pada content Based Filtering, kita akan menggunakan TF-IDF Vectorizer untuk membangun sistem rekomendasi berdasarkan penulis buku.

TF-IDF yang merupakan kepanjangan dari Term Frequency-Inverse Document Frequency memiliki fungsi untuk mengukur seberapa pentingnya suatu kata terhadap kata - kata lain dalam dokumen.
Kita umumnya menghitung skor untuk setiap kata untuk menandakan pentingnya dalam dokumen dan corpus. Metode sering digunakan dalam Information Retrieval dan Text Mining.

![TF-IDF initialization](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/19.JPG))
Pada code di atas, saya mendefinisikan tf = TfidfVectorizer() dan mendapatkan kata - kata penting dalam kolom book_author yang berasal dari attribut .get_feature_names() dari tf.

Kemudian dari string yang didapat akan dimasukkan ke dalam matriks. Pada proyek ini, saya menggunakan tfidf_matrix sebagai matriks.

Dalam sistem rekomendasi, kita perlu mencari cara supaya item yang kita rekomendasikan tidak terlalu jauh dari data pusat, oleh karena itu kita butuh derajat kesamaan pada item, dalam proyek ini, buku dengan derajat kesamaan antar buku dengan cosine similarity.

Kemudian kita membutuhkan fungsi author_recommendation di mana atribut argpartition berguna untuk mengambil sejumlah nilai k, dalam fungsi ini 5 tertinggi dari tingkat kesamaan yang berasal dari dataframe cosine_sim_df. Jumlah rekomendasi yang akan diberikan nantinya akan ditentukan oleh nilai k pada fungsi author_recommendation.

**book[book.book_title.eq(books_that_have_been_read)]**

Kode di atas dibutuhkan untuk mencari buku yang memiliki kemiripan dengan buku yang sudah kita baca.

**recommendations = author_recommendations(books_that_have_been_read, cosine_sim_df, book[['book_title', 'book_author']])**

Setelah kita menjalankan kode di atas, kita akan mendapatkan 5 buku rekomendasi yang berasal dari penulis yang sama.
Berikut adalah hasil rekomendasi untuk buku "The Diaries of Adam and Eve":

![recommendedBooks](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/23.JPG))

Terlihat dari buku - buku yang direkomendasikan berasal dari penulis buku yang sama. Buku yang memiliki penulis yang sama memiliki kesamaan konten, gaya penulisan, dan bahasa membuat pembaca nyaman dan tidak perlu beradaptasi dengan perubahan gaya penulisan dan bahasa yang ada.

**Collaborative Based Filtering**
Model yang akan dipakai dalam Collaborative Based Filtering adalah RecommenderNet.
Selanjutnya kita melakukan proses compile pada model dengan binary crossentropy sebagai loss function, adam sebagai optimizer, dan RMSE sebagai metrik dari model.

Setelah proses compile sudah selesai, kita akan melatih model dengan batch_size 5 dan 20 epochs.

Untuk mendapatkan rekomendasi, kita perlu menambahkan beberapa kode tambahan, dimulai dengan mengambil user_id secara acak dari rating_dataset. Dari user_id ini kita perlu mengetahui buku - buku apa saja yang pernah dibaca dan yang belum pernah dibaca, sehingga kita hanya dapat merekomendasikan buku - buku yang belum dibaca.

Setelah itu kita akan mendapatkan rekomendasi sesuai dengan user_id yang didapatkan.

Hasil rekomendasi buku untuk user_id = 278221 adalah:
![recommendedBooks](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/26.JPG))

## Evaluation

**Content Based Filtering**
Pada Content Based Filtering, saya menggunakan akurasi sebagai metrik evaluasi.
Akurasi pada Content Based Filtering adalah:
Jumlah buku yang direkomendasikan sesuai dengan penulis buku / Jumlah buku yang direkomendasikan

Dalam mengaplikasi metrik akurasi pada kode adalah dengan membuat variabel books_that_have_been_read_row yang akan mengambil satu row dari buku yang pernah dibaca sebelumnya, dan juga membuat variabel books_that_have_been_read_author adalah penulis buku dari buku yang pernah dibaca sebelumnya.

Saya juga membuat variabel  book_recommendation_authors merupakan sebuah list yang terdiri dari penulis - penulis dari buku - buku yang direkomendasikan oleh sistem.
Kemudian saya membuat looping yang merupakan proses manual di mana setiap penulis dari buku yang direkomendasikan akan dicek, apabila sama, maka variabel real_author akan bertambah 1.

Kemudian di bawah ini adalah hasil dari akurasi dari model sistem rekomendasi, di mana jumlah buku yang direkomendasikan sesuai dengan penulis buku (Variabel real_author) / Jumlah buku yang direkomendasikan (5).

![Accuracy](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/27.JPG)

Kelebihan pada evaluasi metrik akurasi terletak pada kesederhanaannya untuk dipahami, karena metrik akurasi hanyalah jumlah yang benar dibandingkan dengan keseluruhan jawaban.

Sedangkan kekurangan pada evaluasi metrik adalah terletak pada kesederhanannya pula, karena metrik akurasi hanya menghitung jumlah yang benar dibandingkan dengan keseluruhan jawaban dan tidak memperhitungkan aspek lainnya.

**Collaborative Based Filtering**
Pada Collaborative Based Filtering, kita memiliki evaluasi metrik RMSE atau root-mean-square error.RMSE adalah ukuran yang sering digunakan untuk perbedaan antara nilai (nilai sampel atau populasi) yang diprediksi oleh model atau penduga dan nilai yang diamati.Berbeda dengan MSE, RMSE adalah hasil dari akar MSE membuat RMSE memiliki nilai yang lebih kecil dibandingkan dengan MSE.

Berikut adalah rumus RMSE:
![RMSE](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/22.JPG)
Dimana,
At = Nilai data Aktual
Ft = Nilai hasil peramalan
N= banyaknya data
∑ = Summation (Jumlahkan keseluruhan  nilai)

RMSE memiliki nilai yang lebih kecil daripada MSE, dengan adanya nilai kecil ini dapat menjadi kelebihan dan kekurangan tersendiri. Kelebihan dari nilai kecil adalah kita tidak perlu takut karena nilai error nya kecil dan kita dapat langsung masuk ke tahap selanjutnya, namun dengan nilai error yang kecil, kita dapat menjadi terlalu percaya diri dengan modelnya tanpa melihat posibilitas overfitting atau undefitting.

RMSE terlebih dahulu kita definisikan pada bagian metrik dalam model, kemudian kita visualisasikan lewat grafik.
![Grafik](https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/24.JPG))


