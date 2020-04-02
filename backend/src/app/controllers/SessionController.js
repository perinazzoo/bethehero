import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { promisify } from 'util';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect provided data' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    const token = jwt.sign({ id, name, email }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    return res.json({
      token,
      name,
      expireAt: decoded.exp,
      logout: false,
      expired: false,
    });
  }
}

export default new SessionController();
