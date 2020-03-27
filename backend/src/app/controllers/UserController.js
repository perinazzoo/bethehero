import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password, whatsapp, address, ong = false } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      whatsapp,
      address,
      ong,
    });

    return res.json(user);
  }
}

export default new UserController();
