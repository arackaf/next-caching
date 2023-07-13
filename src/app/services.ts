export async function getA(userId: string = "") {
  const headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  };
  const resp = await fetch("http://localhost:5002/api/a", { method: "get", headers, next: { revalidate: 10, tags: ["a"] } });
  const json = await resp.json();

  return json;
}

export async function getB(userId: string = "") {
  const resp = await fetch("http://localhost:5002/api/b", { next: { revalidate: 10, tags: ["b"] } });
  const json = await resp.json();

  return json;
}

export async function getC(userId: string = "") {
  const resp = await fetch("http://localhost:5002/api/c", { next: { revalidate: 10, tags: ["c"] } });
  const json = await resp.json();

  return json;
}
