class TestController {
  async index(req, res) {
    res.json({ name: req.userName, email: req.userEmail });
  }
}

export default new TestController();
