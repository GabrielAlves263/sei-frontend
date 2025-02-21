"use client";
import { getCookie } from "cookies-next";
import { signOut } from "next-auth/react";

export const fetchClient = async (
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> => {
  const jwt = getCookie("jwt");

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(jwt && { Authorization: `Bearer ${jwt}` }),
    },
  });

  if (response.status === 401) {
    await signOut();
  }

  return response;
};
