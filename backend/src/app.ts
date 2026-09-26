import Fastify from "fastify";
import prismaPlugin from "./plugins/prisma.js";
import { certificationRoutes } from "./modules/certifications/routes.js";
import { healthRoute } from "./routes/health.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(prismaPlugin);
  app.register(healthRoute);
  app.register(certificationRoutes);

  return app;
}
