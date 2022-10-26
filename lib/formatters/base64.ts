const encode = (data: string) => Buffer.from(data).toString('base64');

const decode = (base64Data: string) => Buffer.from(base64Data, 'base64').toString();

export {
  encode,
  decode,
};
