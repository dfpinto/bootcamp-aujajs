async function getJsonResponse(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

async function showCepData(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const json = await getJsonResponse(url);
  console.log(json);
}

showCepData("01001000");
showCepData("-1");