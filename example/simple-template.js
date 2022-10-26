const Microfront = require('../dist').default;
const template = `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8"/>
    <title>Simple Template Example</title>
  </head>
  <body>
    <fragment href="https://www.google.com.br/" cache="1d" />
  </body>
</html>`

const renderExample = async () => {
  const renderer = new Microfront();
  const html = await renderer.render(template);
  console.log(html);
}

renderExample();
