// src/interfaces/jwt-payload.interface.ts
export interface JwtPayload {
    username: string;
    sub: number; // Aquí 'sub' es el ID del usuario
  }