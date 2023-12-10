import ngrok from "@ngrok/ngrok";
import qrcode from "qrcode-terminal";

const listener = await ngrok.forward({
  addr: 5111,
  authtoken_from_env: true,
});

const url = listener.url()!;

qrcode.generate(url, { small: true }, (text) => {
  console.log(text);
});
console.log(url);

while (true) {}
