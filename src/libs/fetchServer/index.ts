import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchServer = async (
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> => {
  const jwt = cookies().get("jwt");

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(jwt && { Authorization: `Bearer ${jwt.value}` }),
    },
  });

  if (response.status === 401) {
    return redirect("/login");
  }

  return response;
};
