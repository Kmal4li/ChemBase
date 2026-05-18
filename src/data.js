export const compoundsData = [
  {
    id: 'c1',
    name: 'Asam Sulfat',
    formula: 'H₂SO₄',
    cas: '7664-93-9',
    category: 'Asam Kuat',
    wujud: 'Cairan kental',
    warna: 'Tidak berwarna',
    ph: '< 1',
    hazards: ['Korosif', 'Toksik'],
    beratMolekul: '98.079 g/mol',
    titikDidih: '337 °C',
    kepadatan: '1.84 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Sangat larut dalam air (eksotermik)' },
      { label: 'Reaktivitas', value: 'Bereaksi hebat dengan air dan basa' }
    ],
    msds: {
      penanganan: 'Gunakan APD lengkap (jas lab, sarung tangan nitril, kacamata pelindung). Hindari kontak dengan kulit dan mata.',
      penyimpanan: 'Simpan di lemari asam, jauhkan dari bahan organik dan basa kuat.',
      p3k: 'Bilas dengan air mengalir selama minimal 15 menit jika terkena kulit atau mata. Segera hubungi medis.',
      pembuangan: 'Netralkan dengan basa lemah sebelum dibuang ke penampungan limbah khusus.'
    }
  },
  {
    id: 'c2',
    name: 'Natrium Hidroksida',
    formula: 'NaOH',
    cas: '1310-73-2',
    category: 'Basa Kuat',
    wujud: 'Padatan (pelet)',
    warna: 'Putih',
    ph: '> 13',
    hazards: ['Korosif'],
    beratMolekul: '39.997 g/mol',
    titikDidih: '1388 °C',
    kepadatan: '2.13 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Sangat larut dalam air (eksotermik)' },
      { label: 'Hidroskopis', value: 'Menyerap kelembapan dan CO2 dari udara' }
    ],
    msds: {
      penanganan: 'Gunakan sarung tangan pelindung dan kacamata. Jangan menghirup debu.',
      penyimpanan: 'Simpan di wadah tertutup rapat di tempat kering. Jauhkan dari asam dan kelembapan.',
      p3k: 'Bilas dengan air banyak jika terkena. Jangan memaksakan muntah jika tertelan.',
      pembuangan: 'Encerkan dan netralkan dengan asam lemah (seperti asam asetat) sebelum pembuangan.'
    }
  },
  {
    id: 'c3',
    name: 'Kloroform',
    formula: 'CHCl₃',
    cas: '67-66-3',
    category: 'Pelarut Organik',
    wujud: 'Cairan volatil',
    warna: 'Tidak berwarna',
    ph: 'Netral',
    hazards: ['Toksik'],
    beratMolekul: '119.38 g/mol',
    titikDidih: '61.2 °C',
    kepadatan: '1.49 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Tidak larut dalam air, larut dalam pelarut organik' },
      { label: 'Aroma', value: 'Berbau khas, manis' }
    ],
    msds: {
      penanganan: 'Gunakan di ruang asam dengan ventilasi baik. Hindari menghirup uap.',
      penyimpanan: 'Simpan di tempat gelap dan sejuk dalam wadah tertutup rapat.',
      p3k: 'Pindahkan ke udara segar. Jika tidak bernapas, berikan pernapasan buatan.',
      pembuangan: 'Kumpulkan dalam wadah limbah halogen organik.'
    }
  },
  {
    id: 'c4',
    name: 'Etanol',
    formula: 'C₂H₅OH',
    cas: '64-17-5',
    category: 'Alkohol',
    wujud: 'Cairan',
    warna: 'Tidak berwarna',
    ph: 'Netral',
    hazards: ['Mudah Terbakar', 'Aman'],
    beratMolekul: '46.07 g/mol',
    titikDidih: '78.37 °C',
    kepadatan: '0.789 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Larut dalam air dalam segala perbandingan' },
      { label: 'Titik Nyala', value: '13 °C (Cairan sangat mudah terbakar)' }
    ],
    msds: {
      penanganan: 'Jauhkan dari panas, percikan, dan nyala api terbuka. Dilarang merokok.',
      penyimpanan: 'Simpan di tempat berventilasi baik. Jaga wadah tertutup rapat.',
      p3k: 'Bilas mata dengan air. Jika tertelan, minum air dan cari bantuan medis jika merasa tidak enak badan.',
      pembuangan: 'Dapat dibakar dalam insinerator kimia yang disetujui.'
    }
  },
  {
    id: 'c5',
    name: 'Asam Klorida',
    formula: 'HCl',
    cas: '7647-01-0',
    category: 'Asam Kuat',
    wujud: 'Cairan bening hingga agak kekuningan',
    warna: 'Tidak berwarna',
    ph: '< 1',
    hazards: ['Korosif', 'Toksik'],
    beratMolekul: '36.46 g/mol',
    titikDidih: '48 °C (larutan 38%)',
    kepadatan: '1.18 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Sangat larut dalam air' },
      { label: 'Aroma', value: 'Berbau tajam dan menyesakkan' }
    ],
    msds: {
      penanganan: 'Gunakan lemari asam. Hindari menghirup uap gas klorida yang menguap.',
      penyimpanan: 'Simpan di tempat berventilasi baik, wadah non-logam. Jauhkan dari zat oksidator.',
      p3k: 'Bilas kulit/mata dengan air mengalir selama 15 menit. Hirup udara segar jika terhirup uapnya.',
      pembuangan: 'Netralkan dengan basa lemah (contoh: soda kue) sebelum dibuang dengan pengenceran tinggi.'
    }
  },
  {
    id: 'c6',
    name: 'Asam Asetat',
    formula: 'CH₃COOH',
    cas: '64-19-7',
    category: 'Asam Lemah',
    wujud: 'Cairan jernih',
    warna: 'Tidak berwarna',
    ph: '2.4 (larutan 1M)',
    hazards: ['Korosif', 'Mudah Terbakar'],
    beratMolekul: '60.05 g/mol',
    titikDidih: '118.1 °C',
    kepadatan: '1.05 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Bercampur sempurna dengan air' },
      { label: 'Aroma', value: 'Bau cuka yang kuat' }
    ],
    msds: {
      penanganan: 'Gunakan sarung tangan dan pelindung mata. Jauhkan dari sumber api.',
      penyimpanan: 'Simpan di atas titik bekunya (16.6 °C) agar tidak mengkristal (Asam Asetat Glasial).',
      p3k: 'Bilas area yang terkena dengan air banyak. Jangan dimuntahkan jika tertelan.',
      pembuangan: 'Netralkan perlahan, kemudian bilas ke saluran pembuangan jika sudah aman.'
    }
  },
  {
    id: 'c7',
    name: 'Amonia',
    formula: 'NH₃',
    cas: '1336-21-6',
    category: 'Basa Lemah',
    wujud: 'Larutan dalam air',
    warna: 'Tidak berwarna',
    ph: '11.6',
    hazards: ['Toksik', 'Korosif'],
    beratMolekul: '17.03 g/mol',
    titikDidih: '-33.3 °C (gas)',
    kepadatan: '0.90 g/cm³ (larutan 25%)',
    sifat: [
      { label: 'Kelarutan', value: 'Sangat larut dalam air' },
      { label: 'Aroma', value: 'Bau pesing yang sangat menyengat' }
    ],
    msds: {
      penanganan: 'Wajib digunakan di dalam lemari asam. Jangan hirup uapnya langsung.',
      penyimpanan: 'Simpan di wadah tertutup rapat, suhu sejuk.',
      p3k: 'Segera pindah ke udara segar. Bilas mata dan kulit dengan air.',
      pembuangan: 'Netralkan dengan asam encer atau buang sesuai prosedur limbah B3.'
    }
  },
  {
    id: 'c8',
    name: 'Kalium Permanganat',
    formula: 'KMnO₄',
    cas: '7722-64-7',
    category: 'Oksidator Kuat',
    wujud: 'Kristal',
    warna: 'Ungu gelap / perunggu',
    ph: 'Netral',
    hazards: ['Toksik', 'Korosif'],
    beratMolekul: '158.03 g/mol',
    titikDidih: 'Terurai',
    kepadatan: '2.70 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Larut dalam air menghasilkan warna ungu pekat' },
      { label: 'Sifat Kimia', value: 'Oksidator yang sangat kuat' }
    ],
    msds: {
      penanganan: 'Hindari gesekan. Jangan campur dengan bahan organik atau mudah terbakar.',
      penyimpanan: 'Simpan di tempat kering dan jauh dari agen pereduksi.',
      p3k: 'Bilas dengan air mengalir. Jika tertelan segera cari bantuan medis.',
      pembuangan: 'Reduksi menjadi MnO2 yang tidak berbahaya sebelum dibuang.'
    }
  },
  {
    id: 'c9',
    name: 'Metanol',
    formula: 'CH₃OH',
    cas: '67-56-1',
    category: 'Alkohol',
    wujud: 'Cairan',
    warna: 'Tidak berwarna',
    ph: 'Netral',
    hazards: ['Mudah Terbakar', 'Toksik'],
    beratMolekul: '32.04 g/mol',
    titikDidih: '64.7 °C',
    kepadatan: '0.792 g/cm³',
    sifat: [
      { label: 'Kelarutan', value: 'Bercampur dengan air sepenuhnya' },
      { label: 'Aroma', value: 'Mirip etanol namun sedikit lebih manis' }
    ],
    msds: {
      penanganan: 'Gunakan ventilasi. Jangan dihirup dan cegah kontak kulit karena dapat terserap.',
      penyimpanan: 'Simpan jauh dari panas, percikan api, dan oksidator.',
      p3k: 'Segera bawa ke dokter jika tertelan (sangat beracun, dapat memicu kebutaan).',
      pembuangan: 'Insinerasi atau serahkan ke pengolah limbah yang berwenang.'
    }
  },
  {
    id: 'c10',
    name: 'Hidrogen Peroksida',
    formula: 'H₂O₂',
    cas: '7722-84-1',
    category: 'Oksidator',
    wujud: 'Cairan',
    warna: 'Bening pucat kebiruan',
    ph: 'Sedikit asam',
    hazards: ['Korosif', 'Toksik'],
    beratMolekul: '34.01 g/mol',
    titikDidih: '150.2 °C',
    kepadatan: '1.45 g/cm³ (murni)',
    sifat: [
      { label: 'Kelarutan', value: 'Bercampur dengan air' },
      { label: 'Dekomposisi', value: 'Terurai perlahan menjadi air dan gas oksigen' }
    ],
    msds: {
      penanganan: 'Gunakan kacamata pelindung. Konsentrasi tinggi dapat melepuh pada kulit.',
      penyimpanan: 'Simpan dalam wadah berventilasi di tempat sejuk dan gelap.',
      p3k: 'Bilas area yang terkena dengan air mengalir. Lepaskan pakaian yang terkontaminasi.',
      pembuangan: 'Encerkan dengan air dalam jumlah besar sebelum pembuangan.'
    }
  }
];

export const reportsData = [
  {
    id: 'r1',
    judul: 'Titrasi Asam-Basa',
    metode: 'Volumetri',
    kategori: 'Kimia Analitik Dasar',
    prinsip: 'Penentuan konsentrasi larutan asam atau basa dengan meneteteskan larutan standar (titran) yang konsentrasinya telah diketahui secara pasti ke dalam larutan analit hingga mencapai titik ekivalen yang ditandai dengan perubahan warna indikator.',
    tujuan: [
      'Menentukan konsentrasi larutan HCl menggunakan larutan standar NaOH.',
      'Memahami penggunaan indikator fenolftalein dalam titrasi asam kuat dan basa kuat.'
    ],
    alat: ['Buret 50 mL', 'Erlenmeyer 250 mL', 'Pipet volume 10 mL', 'Statif & klem', 'Gelas beker'],
    bahan: ['Larutan sampel HCl', 'Larutan standar NaOH 0.1 N', 'Indikator Fenolftalein (PP)', 'Akuades'],
    caraKerja: [
      'Bilas dan isi buret dengan larutan NaOH 0.1 N hingga tanda batas.',
      'Pipet tepat 10 mL larutan sampel HCl dan masukkan ke dalam erlenmeyer.',
      'Tambahkan 2-3 tetes indikator fenolftalein ke dalam erlenmeyer.',
      'Titrasi larutan HCl dengan NaOH dari buret sambil terus digoyang perlahan.',
      'Hentikan titrasi ketika terjadi perubahan warna menjadi merah muda pucat yang stabil selama 30 detik.',
      'Catat volume NaOH yang terpakai dan lakukan pengulangan (duplo/triplo).'
    ],
    tags: ['Kuantitatif', 'Titrasi', 'Asidi-Alkalimetri']
  },
  {
    id: 'r2',
    judul: 'Ekstraksi Pelarut',
    metode: 'Pemisahan Fisik',
    kategori: 'Kimia Organik',
    prinsip: 'Pemisahan suatu komponen zat dari campurannya berdasarkan perbedaan kelarutan komponen tersebut dalam dua pelarut yang tidak saling bercampur (biasanya fasa air dan fasa organik).',
    tujuan: [
      'Memisahkan kafein dari daun teh menggunakan pelarut kloroform.',
      'Menghitung persentase rendemen kafein yang diekstrak.'
    ],
    alat: ['Corong pisah 250 mL', 'Gelas beker', 'Pemanas (hotplate)', 'Kertas saring', 'Kaca arloji'],
    bahan: ['Sampel teh', 'Kloroform (CHCl₃)', 'Natrium karbonat (Na₂CO₃)', 'Natrium sulfat anhidrat', 'Akuades'],
    caraKerja: [
      'Rebus daun teh dengan air mendidih dan tambahkan natrium karbonat, lalu saring.',
      'Dinginkan ekstrak teh dan pindahkan ke dalam corong pisah.',
      'Tambahkan kloroform ke dalam corong pisah dan kocok secara perlahan, sesekali buka kran untuk melepas gas.',
      'Diamkan hingga terbentuk dua lapisan cairan yang jelas.',
      'Keluarkan lapisan kloroform (lapisan bawah) dan tampung dalam erlenmeyer.',
      'Keringkan lapisan kloroform dengan menambahkan natrium sulfat anhidrat, lalu saring.',
      'Uapkan kloroform untuk mendapatkan residu kafein.'
    ],
    tags: ['Ekstraksi Cair-Cair', 'Isolasi', 'Alkaloid']
  },
  {
    id: 'r3',
    judul: 'Spektrofotometri UV-Vis',
    metode: 'Instrumen',
    kategori: 'Kimia Analitik Lanjut',
    prinsip: 'Pengukuran serapan cahaya di daerah ultraviolet (200-400 nm) dan sinar tampak (400-800 nm) oleh suatu molekul. Besarnya serapan (absorbansi) berbanding lurus dengan konsentrasi zat sesuai dengan Hukum Lambert-Beer.',
    tujuan: [
      'Menentukan panjang gelombang maksimum larutan kalium permanganat.',
      'Membuat kurva kalibrasi dan menentukan konsentrasi sampel yang tidak diketahui.'
    ],
    alat: ['Spektrofotometer UV-Vis', 'Kuvet kuarsa', 'Labu ukur 50 mL', 'Pipet ukur', 'Gelas beker'],
    bahan: ['Larutan standar KMnO₄', 'Sampel uji', 'Akuades sebagai blanko'],
    caraKerja: [
      'Nyalakan spektrofotometer dan biarkan pemanasan (warm-up) selama 15 menit.',
      'Buat deret larutan standar KMnO₄ dengan berbagai konsentrasi yang diketahui.',
      'Ukur blanko (akuades) pada rentang panjang gelombang 400-600 nm untuk mencari serapan nol.',
      'Ukur salah satu larutan standar untuk menentukan panjang gelombang maksimum (λ max).',
      'Ukur absorbansi semua larutan standar pada λ max dan buat kurva kalibrasi.',
      'Ukur absorbansi sampel dan tentukan konsentrasinya menggunakan persamaan regresi linear dari kurva kalibrasi.'
    ],
    tags: ['Kuantitatif', 'Spektroskopi', 'Hukum Lambert-Beer']
  },
  {
    id: 'r4',
    judul: 'Kromatografi Lapis Tipis (KLT)',
    metode: 'Kromatografi',
    kategori: 'Kimia Analitik Organik',
    prinsip: 'Pemisahan campuran komponen didasarkan pada perbedaan afinitas antara fasa diam (adsorben) dan fasa gerak (eluen). Komponen akan bergerak dengan kecepatan berbeda sehingga terpisah.',
    tujuan: [
      'Memisahkan zat warna sintetik dari makanan.',
      'Menghitung nilai Rf (Retardation factor) dari setiap komponen warna.'
    ],
    alat: ['Plat silika gel (KLT)', 'Chamber kromatografi', 'Pipa kapiler', 'Lampu UV', 'Penggaris & pensil'],
    bahan: ['Sampel makanan', 'Eluen (Etanol : Air)', 'Standar zat warna'],
    caraKerja: [
      'Siapkan plat KLT dan buat garis batas bawah serta atas menggunakan pensil.',
      'Totolkan sampel dan larutan standar pada garis batas bawah dengan pipa kapiler.',
      'Masukkan plat ke dalam chamber yang sudah dijenuhkan dengan uap eluen.',
      'Biarkan eluen merambat naik membawa komponen campuran.',
      'Keluarkan plat setelah eluen mencapai batas atas, keringkan di udara.',
      'Amati noda yang terbentuk (gunakan UV jika tidak terlihat) dan hitung nilai Rf-nya.'
    ],
    tags: ['Kualitatif', 'Pemisahan', 'Zat Warna']
  },
  {
    id: 'r5',
    judul: 'Sintesis Aspirin',
    metode: 'Sintesis Organik',
    kategori: 'Kimia Organik',
    prinsip: 'Reaksi esterifikasi antara asam salisilat dengan anhidrida asetat menggunakan katalis asam (seperti asam sulfat pekat) untuk menghasilkan asam asetilsalisilat (aspirin) dan asam asetat sebagai produk samping.',
    tujuan: [
      'Mensintesis aspirin skala laboratorium.',
      'Menentukan titik leleh aspirin untuk uji kemurnian.',
      'Menghitung persentase rendemen (yield) produk.'
    ],
    alat: ['Erlenmeyer 125 mL', 'Penangas air', 'Corong Buchner', 'Termometer', 'Kaca arloji'],
    bahan: ['Asam salisilat', 'Anhidrida asetat', 'Asam sulfat pekat (H₂SO₄)', 'Etanol dingin', 'Air es'],
    caraKerja: [
      'Masukkan asam salisilat ke erlenmeyer dan tambahkan anhidrida asetat.',
      'Tambahkan beberapa tetes asam sulfat pekat sebagai katalis.',
      'Panaskan campuran dalam penangas air suhu 50-60°C selama 15 menit.',
      'Dinginkan campuran sambil menambahkan sedikit air dingin untuk mendegradasi sisa anhidrida.',
      'Saring kristal yang terbentuk menggunakan corong Buchner.',
      'Lakukan rekristalisasi dengan etanol untuk memurnikan kristal.',
      'Keringkan, timbang rendemen, dan lakukan uji titik leleh.'
    ],
    tags: ['Esterifikasi', 'Rekristalisasi', 'Farmasi']
  },
  {
    id: 'r6',
    judul: 'Titrasi Kompleksometri',
    metode: 'Volumetri',
    kategori: 'Kimia Analitik Dasar',
    prinsip: 'Titrasi yang berdasarkan pembentukan senyawa kompleks yang larut antara ion logam dengan agen pengkelat, seperti EDTA, dengan menggunakan indikator logam untuk menentukan titik akhir.',
    tujuan: [
      'Menentukan kesadahan air (konsentrasi ion Ca²⁺ dan Mg²⁺).',
      'Memahami fungsi buffer dan indikator EBT dalam titrasi kompleksometri.'
    ],
    alat: ['Buret 50 mL', 'Erlenmeyer', 'Pipet volume 50 mL', 'Gelas ukur'],
    bahan: ['Sampel air', 'Larutan standar EDTA 0.01 M', 'Buffer Salmiak pH 10', 'Indikator Eriochrome Black T (EBT)'],
    caraKerja: [
      'Ambil sampel air sebanyak 50 mL menggunakan pipet volume.',
      'Tambahkan 2 mL buffer amonia-amonium klorida (pH 10).',
      'Tambahkan seujung spatula indikator EBT hingga larutan berwarna merah anggur.',
      'Titrasi dengan EDTA secara perlahan sambil terus dikocok.',
      'Titik akhir tercapai bila warna larutan berubah tegas dari merah anggur menjadi biru murni.',
      'Catat volume EDTA yang terpakai dan hitung tingkat kesadahan air.'
    ],
    tags: ['Kesadahan Air', 'Kuantitatif', 'EDTA']
  },
  {
    id: 'r7',
    judul: 'Destilasi Fraksinasi',
    metode: 'Pemisahan Termal',
    kategori: 'Kimia Fisik',
    prinsip: 'Pemisahan campuran cairan volatil berdasarkan perbedaan titik didihnya menggunakan kolom fraksinasi yang memberikan siklus penguapan-kondensasi berulang, sehingga pemisahan lebih murni.',
    tujuan: [
      'Memisahkan campuran etanol-air.',
      'Menentukan kemurnian destilat yang diperoleh dengan indeks bias.'
    ],
    alat: ['Labu alas bulat', 'Kolom fraksinasi (Vigreux)', 'Kondensor Liebig', 'Termometer', 'Heating mantle', 'Refraktometer'],
    bahan: ['Campuran Etanol-Air 50%', 'Batu didih'],
    caraKerja: [
      'Susun alat destilasi fraksinasi dengan rapat dan olesi vaselin pada setiap sambungan.',
      'Masukkan campuran sampel dan batu didih ke dalam labu alas bulat.',
      'Nyalakan pemanas dan air pendingin pada kondensor.',
      'Amati kenaikan suhu. Etanol akan mulai menetes sebagai destilat pada kisaran 78°C.',
      'Tampung destilat secara bertahap pada wadah yang berbeda berdasarkan perubahan suhu konstan.',
      'Ukur indeks bias destilat untuk mengecek kemurnian.'
    ],
    tags: ['Pemurnian', 'Titik Didih', 'Campuran Cairan']
  }
];
