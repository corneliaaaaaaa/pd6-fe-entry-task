async function fetchData(url, setData) {
  const res = await fetch(url);
  const data = await res.json();
  return setData(data);
}

export default fetchData;
