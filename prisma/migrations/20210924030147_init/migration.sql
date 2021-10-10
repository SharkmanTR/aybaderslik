-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AybaUsers" (
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
    "dyt" TEXT NOT NULL,
    "ehesap" TEXT NOT NULL DEFAULT '1'
);
INSERT INTO "new_AybaUsers" ("adsoyad", "barkod", "bita", "bitg", "bity", "dtarihi", "durum", "dyt", "email", "hoca", "id", "paket", "sifre", "sinif", "tc", "tema", "uni") SELECT "adsoyad", "barkod", "bita", "bitg", "bity", "dtarihi", "durum", "dyt", "email", "hoca", "id", "paket", "sifre", "sinif", "tc", "tema", "uni" FROM "AybaUsers";
DROP TABLE "AybaUsers";
ALTER TABLE "new_AybaUsers" RENAME TO "AybaUsers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
