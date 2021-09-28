# Laporan Proyek Machine Learning - Farel Arden

## Domain Proyek

Dengan judul Competition “Titanic - Machine Learning from Disaster”, dataset ini merupakan salah satu dataset yang paling terkenal di kalangan komunitas data scientists. Dataset ini umumnya dipakai oleh data scientists pemula dalam pembelajaran mereka. Dengan dataset ini, data scientists dapat dengan leluasa meniliti dikarenakan dataset ini memiliki data yang beragam dan ramah untuk pemula.

Berdasarkan Wikipedia [tautan](https://en.wikipedia.org/wiki/Titanic), RMS Titanic pada masa lampau adalah kapal penumpang yang dioperasikan oleh White Star Line yang tenggelam di laut Atlantik utara pada tanggal 15 April 1912, dikarenakan oleh tabrakan RMS Titanic dengan gunung es pada saat berlayar dari Southampton ke kota New York. 

RMS Titanic membawa 2224 penumpang dan awak kapal dengan 1500 orang meninggal dunia. Dengan banyaknya orang yang meninggal dunia dari tabrakan RMS Titanic ini, public banyak mengenang tragedi ini lewat film, lagu, dan lukisan.

RMS Titanic adalah kapal terbesar ketika ia berlayar dan dinahkodai oleh Captain Edward Smith yang seperti seorang nahkoda pada umumnya, ia meninggal bersama dengan kapalnya.
Di dalam dataset ini, model diminta untuk memprediksi penumpang seperti apakah yang memiliki kemungkinan terbesar untuk selamat? 

## Business Understanding

### Problem Statement:
-	Fitur – fitur mana saja yang paling berpengaruh terhadap keselamatan penumpang RMS Titanic?
-	Penumpang dengan detail seperti apa yang membuat nya memiliki kemungkinan terbesar untuk selamat dalam tabrakan RMS Titanic dengan gunung es?

### Goals:
-	Mengetahui fitur – fitur yang paling berpengaruh terhadap keselamatan penumpang RMS Titanic.
-	Membuat model machine learning yang dapat mengetahui kemungkinan terbesar penumpang – penumpang yang selamat lewat data yang diberikan.

### Solution Statements:
-	Menggunakan EDA untuk melihat fitur – fitur yang berkorelasi dan berpengaruh terhadap keselamatan penumpang RMS Titanic.
-	Menggunakan berbagai model machine learning untuk mengetahui kemungkinan terbesar penumpang – penumpang yang selamat lewat data yang diberikan. Kemudian kita akan memilih model mana yang memiliki tingkat akurasi paling tinggi, model – model yang akan dibuat adalah:
	1.	XGBRegressor
	2.	XGBClassifier
	3.	CatBoost
	4.	LGBMRegressor
Untuk model – model regresi, saya menggunakan sebuah function di mana apabila hasil regresi melebihi nilai 0.55 maka akan dijadikan 1 atau Survived, dan 0 atau Not Survived bila tidak.

## Data Understanding

Dataset Titanic dapat didownload di https://www.kaggle.com/c/titanic/data.
Di dalam dataset ini, ada 10 variabel dengan 9 fitur dan 1 label. Berikut adalah variable dengan penjelasannya:
- 	Survival 
	Definisi: Memberi tahu apakah penumpang tersebut selamat atau tidak.
	Kunci: 0 jika tidak selamat dan 1 jika selamat.
-	Pclass
	Definisi: Memberi tahu kelas tiket yang dibeli
	Kunci: 1st untuk kelas pertama, 2nd untuk kelas kedua, dan 3rd untuk kelas ketiga.
-	Sex
	Definisi: Memberi tahu jenis kelamin penumpang.
	Kunci: male untuk laki – laki dan female untuk perempuan.
-	Age
	Definisi: Memberi tahu umur penumpang.
-	Sibsp
	Definisi: Memberi tahu berapa banyak saudara atau pasangan penumpang di dalam kapal.
-	Parch
	Definisi: Memberi tahu berapa banyak orang tua atau anak penumpang di dalam kapal.
-	Ticket
	Definisi: Memberi tahu nomor tiket penumpang.
-	Fare
	Definisi: Memberi tahu harga tiket penumpang.
-	Cabin
	Definisi: Memberi tahu nomor kabin penumpang.
-	Embarked
	Definisi: Memberi tahu di mana penumpang berangkat.
	Key: C bila penumpang berangkat dari Cherbourg, Q bila penumpang berangkat dari Queenstown, S bila penumpang berangkat dari Southampton

Berikut adalah visualisasi data yang saya gunakan dalam menjelaskan korelasi fitur – fitur terhadap kemungkinan selamat penumpang:
-	Sebelum masuk ke Univariate analysis, kita perlu melihat NaN values yang dimiliki oleh Titanic dataset
Terlihat dari heatmap pada notebook, Cabin memiliki NaN values yang sangat banyak, oleh karena itu saya memilih untuk drop kolom cabin.
-	Univariate analysis
 
	Ada 5 barplot yang saya bawakan di notebook. 
-
	![Barplot Pertama](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/1.JPG)

    Pada barplot pertama yang ada pada notebook, kita dapat menyimpulkan bahwa lebih banyak penumpang yang meninggal.

- ![Barplot kedua](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/2.JPG)
 Kita juga dapat menyimpulkan bahwa lebih banyak penumpang membeli tiket kelas ketiga, sehingga kita dapat berasumsi bahwa banyak penumpang yang tidak kaya atau tiket dengan kelas kedua dan pertama sudah habis pada barplot kedua.
- ![Barplot Ketiga](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/3.JPG)
Pada barplot ketiga, kita dapat menyimpulkan bahwa lebih banyak penumpang berjenis kelamin laki – laki.
- ![Barplot Keempat](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/4.JPG)
 Kita pula dapat menyimpulkan bahwa banyak sekali nomor tiket yang dimiliki oleh penumpang – penumpang Titanic, oleh karena itu saya memilih untuk drop kolom Ticket pada saat training nanti pada barplot keempat.
- ![Barplot Kelima](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/5.JPG)
 Dan terakhir, kita dapat menyimpulkan bahwa penumpang paling banyak berasal dari kota Southampton diikuti dengan kota Cherbourg dan kota Queenstown.


-	Multivariate Analysis
 ![Heatmap](https://github.com/alphaprime27/Proyek-Dicoding-Titanic/blob/main/6.JPG)
	Dari heatmap pada notebook, kita dapat melihat beberapa fitur yang tidak berkorelasi seperti fitur ‘Parch’ bahkan berkorelasi negative seperti fitur ‘Pclass’ (-0.24). Oleh karena itu kedua fitur tersebut saya drop.

## Data Preparation

Dalam data preparation saya melakukan 3 hal sebelum memasukkan data ke model latih:

-	Encoding Fitur Kategori
	Encoding Fitur Kategori dilaksanakan di beberapa fitur bertipe objek, yaitu sex dan embark. Hal ini dilakukan karena model machine learning hanya dapat menerima data dalam bentuk numerik. Saya melaksanakan encoding fitur kategori dengan menggunakan fitur get_dummies.
-	Train-Test-Split
	Membagi dataset menjadi data latih dan data validasi adalah hal yang harus kita lakukan sebelum melatih model. Hal ini dilakukan supaya kita dapat melakukan validasi dengan benar tanpa bias dari model.
-	Standarisasi
	Algoritma machine learning akan lebih baik dan lebih optimal apabila dilatih pada model yang memiliki data dengan skala relative yang sama. Scaling ini dilaksanakan untuk membantu model machine learning yang akan dipakai lebih mudah diolah. Saya melaksanakan standarisasi pada kolom Age, Sibsp, dan Fare dengan StandardScaler sebagai fitur standarisasi.

## Modeling

Model – model yang saya pakai dalam projek ini adalah:
1.	**XGBRegressor**
    Merupakan salah satu dari gradient boosting algorithm yang sangat efisien dan fleksibel. XGBRegressor juga memiliki parallel tree boosting. Gradient Boosting algorithm pada dasarnya optimal karena kesalahan diminimalkan dengan menggunakan algoritma penurunan gradien(Berbeda dengan loss function pada umumnya).
2.	**XGBClassifier**
    Model ini hampir sama dengan XGBRegressor hanya saja XGBClassifier menggunakan pohon klasifikasi.
3.	**CatBoost**
    CatBoost Gradient Boosting Algorithm merupakan salah satu Gradient Boosting Algorithm yang menarik, karena kita dapat mendapatkan hasil dengan presisi yang baik hanya dengan menggunakan default parameter. Diciptakan oleh ilmuwan Yanex, CatBoost digunakan oleh perusahaan tersebut untuk menyelesaikan berbagai macam masalah, dimulai dari memprediksi cuaca hingga self-driven cars. 
4.	**LGBMRegressor**
    LGBMRegressor pun memiliki karakteristik yang mirip dengan ketiga algorithm di atas. LGBMRegressor merupakan salah satu gradient boosting algorithm yang cepat dan tidak memakan banyak memori. Yang menarik dari LGBMRegressor adalah ia pula dapat menghasilkan prediksi dengan akurasi yang lebih cepat namun tidak sebaik CatBoost algorithm.

Pada akhirnya, kita pun juga berdebat, gradient boosting algorithm mana yang paling baik? Jawabannya terletak pada eksperimen yang kita lakukan terhadap algoritma tersebut.

Ada pula fungsi threshold yang memiliki tujuan untuk mengubah value dari hasi regresi yang lebih dari 0.55 menjadi 1 dan 0 bila dibawah 0.55.
Dari 4 model machine learning tersebut, dibuktikan bahwa XGBRegressor memiliki tingkat akurasi yang paling tinggi dengan bantuan beberapa parameter.

## Evaluasi

Sebelum ke metrik evaluasi, terlebih dahulu kita harus mengerti tentang confusion matrix.
 
Di dalam confusion matrix, terdapat 4 kesimpulan yang dapat kita ambil:
-	True Positive (TP): Jumlah prediksi positif yang benar terhadap jumlah positif yang sebenarnya.
-	False Positive (FP): Jumlah prediksi positif yang salah.
-	True Negative (TN): Jumlah prediksi negatif yang benar terhadap jumlah negatif yang sebenarnya.
-	False Negative (FN): Jumlah prediksi negatif yang salah.

Saya menggunakan 4 metrik evaluasi dalam projek ini. 4 metrik evaluasi tersebut adalah:
-	**Accuracy**: Ratio dari True Positives dan True Negative terhadap seluruh positif dan negative di seluruh observasi.
	Rumus Accuracy Score = (TP + TN)/ (TP + FN + TN + FP) 
-	**Precision**: Kemampuan model untuk memprediksi nilai positif terhadap seluruh jumlah positif yang diprediksi oleh model.
	Rumus Precision Score = TP / (FP + TP)
-	**Recall**: Kemampuan model untuk memprediksi nilai positif terhadap seluruh jumlah positif yang sesungguhnya.
	Rumus Recall Score = TP / (FN + TP)
-	**F1**: Metrik yang menimbang kemampuan model untuk memberikan Precision dan Recall.
	Rumus F1 Score = 2* Precision Score * Recall Score/ (Precision Score + Recall Score/)

 

