function status(request, response) {
  response.status(200).json({ chave: "olá" });
}
export default status;
