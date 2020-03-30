import { Op } from 'sequelize';
import Incident from '../models/Incident';

class DashboardController {
  async index(req, res) {
    const incidents = await Incident.findAll({
      where: {
        [Op.and]: [{ ong_id: req.userId }, { deleted_at: null }],
      },
      order: [['createdAt', 'DESC']],
    });

    return res.json(incidents);
  }
}

export default new DashboardController();
