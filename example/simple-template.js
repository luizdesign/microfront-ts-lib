const { render } = require('../dist');
const template = `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8"/>
    <title>Simple Template Example</title>
  </head>
  <body>
    <fragment href="https://www.google.com.br/" />
  </body>
</html>`

const renderExample = async () => {
  const html = await render(template);
  console.log(html);
}

renderExample();
