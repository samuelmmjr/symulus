import fp from "fastify-plugin";
import { prisma } from "../database/prisma.js";

export default fp(async (app) => {
  app.decorate("prisma", prisma);

  app.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
});
