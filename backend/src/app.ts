import Fastify from "fastify";
import prismaPlugin from "./plugins/prisma.js";
import { certificationRoutes } from "./modules/certifications/routes.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(prismaPlugin);
  app.register(certificationRoutes);

  return app;
}
