-- Adding "role" column in "user" table
ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';