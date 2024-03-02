-- CreateTable
CREATE TABLE "Gist" (
    "id" SERIAL NOT NULL,
    "user" TEXT,
    "problem" TEXT,

    CONSTRAINT "Gist_pkey" PRIMARY KEY ("id")
);
