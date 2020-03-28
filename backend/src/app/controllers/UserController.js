import { Op } from 'sequelize';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password, whatsapp, address } = req.body;

    const userExists = await User.findOne({
      where: { [Op.or]: [{ email }, { whatsapp }] },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      whatsapp,
      address,
    });

    return res.json(user);
  }

  async update(req, res) {
    console.log(req.userId);

    return res.json({ ok: true });
  }
}

export default new UserController();
