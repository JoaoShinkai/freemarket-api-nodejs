export default (): {
  PORT: number;
} => {
  return {
    PORT: Number(process.env.API_PORT) || 3000
  };
};
