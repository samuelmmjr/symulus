import { CertificationRepository } from "./repository.js";

export class CertificationService {
  constructor(private repository = new CertificationRepository()) {}

  async listCertifications() {
    return this.repository.findAll();
  }
}
