import { Op } from 'sequelize';
import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')]),
      whatsapp: Yup.number().required(),
      address: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect provided data' });
    }

    const { name, email, password, whatsapp, address } = req.body;

    const userExists = await User.findOne({
      where: { [Op.or]: [{ email }, { whatsapp }] },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    await User.create({
      name,
      email,
      password,
      whatsapp,
      address,
    });

    return res.json();
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
