-- CreateTable
CREATE TABLE "AybaUsers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "sifre" TEXT NOT NULL,
    "adsoyad" TEXT NOT NULL,
    "dtarihi" TEXT NOT NULL,
    "tc" TEXT NOT NULL,
    "barkod" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "paket" TEXT NOT NULL,
    "bitg" TEXT NOT NULL,
    "bita" TEXT NOT NULL,
    "bity" TEXT NOT NULL,
    "uni" TEXT NOT NULL,
    "sinif" TEXT NOT NULL,
    "durum" TEXT NOT NULL,
    "hoca" TEXT NOT NULL,
    "dyt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AybaDersDosyalari" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uni" TEXT NOT NULL,
    "sinif" TEXT NOT NULL,
    "ders" TEXT NOT NULL,
    "konu" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AybaDiyetler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uni" TEXT NOT NULL,
    "hoca" TEXT NOT NULL,
    "dsut" TEXT NOT NULL,
    "dyysut" TEXT NOT NULL,
    "dyssut" TEXT NOT NULL,
    "det" TEXT NOT NULL,
    "dekm" TEXT NOT NULL,
    "dkbak" TEXT NOT NULL,
    "dseb" TEXT NOT NULL,
    "dmey" TEXT NOT NULL,
    "dyag" TEXT NOT NULL,
    "dytoh" TEXT NOT NULL,
    "ekcho" TEXT NOT NULL,
    "ekpro" TEXT NOT NULL,
    "ekyag" TEXT NOT NULL,
    "gcho" TEXT NOT NULL,
    "gpro" TEXT NOT NULL,
    "gyag" TEXT NOT NULL,
    "topkcal" TEXT NOT NULL,
    "kcho" TEXT NOT NULL,
    "kpro" TEXT NOT NULL,
    "kyag" TEXT NOT NULL,
    "ycho" TEXT NOT NULL,
    "ypro" TEXT NOT NULL,
    "yyag" TEXT NOT NULL,
    "osabah" TEXT NOT NULL,
    "oara1" TEXT NOT NULL,
    "oogle" TEXT NOT NULL,
    "oara2" TEXT NOT NULL,
    "oaksam" TEXT NOT NULL,
    "oara3" TEXT NOT NULL,
    "fav" TEXT NOT NULL
);
