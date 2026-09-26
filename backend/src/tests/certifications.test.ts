import { describe, it, expect } from "vitest";
import { buildApp } from "../app.js";

describe("Certifications API", () => {
  it("should list certifications", async () => {
    const app = buildApp();

    await app.ready();

    const response = await app.inject({
      method: "GET",
      url: "/certifications",
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();

    expect(body).toBeInstanceOf(Array);

    expect(body.length).toBeGreaterThan(0);

    expect(body[0]).toHaveProperty("name");

    await app.close();
  });
});
