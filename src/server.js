const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  console.log('Belajar framework back end Javascript yang bernama Hapi');
};

init();
