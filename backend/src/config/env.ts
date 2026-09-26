import "dotenv/config";

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }

  return value;
}

export const env = {
  DATABASE_URL: getEnv("DATABASE_URL"),
  DIRECT_URL: getEnv("DIRECT_URL"),
};
