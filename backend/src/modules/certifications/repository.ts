import { prisma } from "../../database/prisma.js";

export class CertificationRepository {
  async findAll() {
    return prisma.certification.findMany({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        name: "asc",
      },
    });
  }
}
