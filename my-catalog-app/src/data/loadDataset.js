// fetch dataset from public/data/<name> and return parsed JSON
export async function loadDataset(name) {
  try {
    const res = await fetch(`/data/${name}`);
    if (!res.ok) throw new Error("not found");
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch dataset", err);
    return null;
  }
}
