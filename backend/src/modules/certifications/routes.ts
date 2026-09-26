import { FastifyInstance } from "fastify";
import { listCertifications } from "./controller.js";

export async function certificationRoutes(app: FastifyInstance) {
  app.get("/certifications", listCertifications);
}
