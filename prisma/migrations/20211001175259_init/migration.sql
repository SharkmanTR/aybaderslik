/*
  Warnings:

  - Added the required column `adsoyad` to the `AybaDiyetler` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "AybaDefter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adsoyad" TEXT NOT NULL,
    "ono" TEXT NOT NULL,
    "uni" TEXT NOT NULL,
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
    "vakaadi" TEXT NOT NULL,
    "hastaliklar" TEXT NOT NULL,
    "ilaclar" TEXT NOT NULL,
    "bulgular" TEXT NOT NULL,
    "servis" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "gun" TEXT NOT NULL,
    "ay" TEXT NOT NULL,
    "yil" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AybaDiyetler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adsoyad" TEXT NOT NULL,
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
    "fav" TEXT NOT NULL,
    "info" TEXT NOT NULL DEFAULT '',
    "gun" TEXT NOT NULL DEFAULT '',
    "ay" TEXT NOT NULL DEFAULT '',
    "yil" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_AybaDiyetler" ("dekm", "det", "dkbak", "dmey", "dseb", "dsut", "dyag", "dyssut", "dytoh", "dyysut", "ekcho", "ekpro", "ekyag", "fav", "gcho", "gpro", "gyag", "hoca", "id", "kcho", "kpro", "kyag", "oaksam", "oara1", "oara2", "oara3", "oogle", "osabah", "topkcal", "uni", "ycho", "ypro", "yyag") SELECT "dekm", "det", "dkbak", "dmey", "dseb", "dsut", "dyag", "dyssut", "dytoh", "dyysut", "ekcho", "ekpro", "ekyag", "fav", "gcho", "gpro", "gyag", "hoca", "id", "kcho", "kpro", "kyag", "oaksam", "oara1", "oara2", "oara3", "oogle", "osabah", "topkcal", "uni", "ycho", "ypro", "yyag" FROM "AybaDiyetler";
DROP TABLE "AybaDiyetler";
ALTER TABLE "new_AybaDiyetler" RENAME TO "AybaDiyetler";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
