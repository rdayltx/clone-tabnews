function status(request, response) {
  response.status(200).json({ hoje: "tá chovendo caraio" });
}

export default status;
