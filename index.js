const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Booting Up ! 🤖");

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase =
    readlineSync.question("Informe uma moeda base: ") || "dólar";
  const moedaFinal =
    readlineSync.question("Informe uma moeda desejada: ") || "real";
  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1FHFK_pt-PTBR1099BR1106&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDIwNjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  const resultado = await page.evaluate(() => {
    return {
      valorMoedaFinal: document.querySelector(".lWzCpb.a61j6").value,
    };
  });

  console.log(
    `O valor de 1 ${moedaBase} em ${moedaFinal} é de ${resultado.valorMoedaFinal}`
  );
  //await page.close();
}

robo();
