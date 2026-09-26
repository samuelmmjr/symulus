import { FastifyReply, FastifyRequest } from "fastify";
import { CertificationService } from "./service.js";

const service = new CertificationService();

export async function listCertifications(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const certifications = await service.listCertifications();

  return reply.status(200).send(certifications);
}
