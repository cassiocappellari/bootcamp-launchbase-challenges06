CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "age" int,
  "cpf" int,
  "phone" int,
  "address1" text,
  "address2" text
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "type" text,
  "description" text,
  "created_at" timestamp
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "number" int,
  "district" text,
  "zipcode" int,
  "city" text,
  "country" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "color" text,
  "plate_number" int,
  "door_number" int,
  "airbag_number" int
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text,
  "model" text,
  "year" int,
  "price" int
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "type" text,
  "number" int,
  "date" timestamp,
  "price" int
);

CREATE TABLE "cars_orders" (
  "id" SERIAL PRIMARY KEY
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("id");

ALTER TABLE "cars_orders" ADD FOREIGN KEY ("id") REFERENCES "orders" ("id");

ALTER TABLE "cars_orders" ADD FOREIGN KEY ("id") REFERENCES "cars" ("id");