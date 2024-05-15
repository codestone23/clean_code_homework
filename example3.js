// Sử dụng async/await để tránh callback hell và làm code dễ đọc

const fetchData = async() => {
  let a = await getData();
  let b = await parseData(a);
  let c = await processData(b);
  await displayData(c);
  console.log('Done');
}

fetchData();