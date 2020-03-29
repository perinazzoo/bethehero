import Incident from '../models/Incident';

class DashboardController {
  async index(req, res) {
    const incidents = await Incident.findAll({
      where: { ong_id: req.userId },
      order: [['createdAt', 'DESC']],
    });

    return res.json(incidents);
  }
}

export default new DashboardController();
