import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.post('/', (req, res) => {
  const json = req.body;

  console.log("");
  console.log("json:", json);

  const possibilidades = [];
  for (const pedra of json.mao) {
    if (pedra.split("-").includes(json.mesa[json.mesa.length - 1][2])) {
      possibilidades.push({ pedra, lado: "direita" });
    }
    if (pedra.split("-").includes(json.mesa[0][0])) {
      possibilidades.push({ pedra, lado: "esquerda" });
    }
  }

  console.log("possibilidades:", possibilidades)

  if (possibilidades.length === 0) {
    res.json({});
    console.log("passo.")
  } else {
    const jogada = possibilidades[Math.floor(Math.random() * possibilidades.length)];
    console.log("jogada:", jogada)
    res.json(jogada);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
