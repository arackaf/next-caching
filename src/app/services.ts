export async function getA(userId: string = "") {
  const resp = await fetch("http://localhost:3000/api/a", { next: { revalidate: 10, tags: ["a"] } });
  const json = await resp.json();

  return json;
}

export async function getB(userId: string = "") {
  const resp = await fetch("http://localhost:3000/api/b", { next: { revalidate: 10, tags: ["b"] } });
  const json = await resp.json();

  return json;
}

export async function getC(userId: string = "") {
  const resp = await fetch("http://localhost:3000/api/c", { next: { revalidate: 10, tags: ["c"] } });
  const json = await resp.json();

  return json;
}
