import Fastify from "fastify";
import prismaPlugin from "./plugins/prisma.js";

export function buildApp() {
  const app = Fastify();

  app.register(prismaPlugin);

  return app;
}
