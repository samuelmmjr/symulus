import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.certification.create({
    data: {
      name: "ISTQB Certified Tester Foundation Level",
      provider: "ISTQB",
      description: "Certificação fundamental em testes de software.",
      status: "ACTIVE",
    },
  });

  console.log("Seed executed successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
