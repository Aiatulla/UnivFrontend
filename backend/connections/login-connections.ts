import { LoginRequest } from "../types/request-types";
export async function fetchLoginConnections({
  role,
  userCode,
  password,
}: LoginRequest) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, userCode, password }),
      }
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return await response.text();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
