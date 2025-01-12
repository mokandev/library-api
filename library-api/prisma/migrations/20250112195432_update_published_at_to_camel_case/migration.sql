/*
  Warnings:

  - You are about to drop the column `publishedAt` on the `books` table. All the data in the column will be lost.
  - Added the required column `published_at` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "publishedAt",
ADD COLUMN     "published_at" TIMESTAMP(3) NOT NULL;
