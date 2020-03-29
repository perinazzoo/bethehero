import * as Yup from 'yup';
import Incident from '../models/Incident';

class IncidentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const incidents = await Incident.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(incidents);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number(),
      material: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect provided data' });
    }

    const { title, description, value, material } = req.body;

    const incident = await Incident.create({
      title,
      description,
      value,
      material,
      ong_id: req.userId,
    });

    return res.json(incident);
  }

  async delete(req, res) {
    const { id } = req.params;

    const incidentExists = await Incident.findByPk(id);

    if (!incidentExists) {
      return res.status(404).json({ error: 'Incident not found' });
    }

    if (incidentExists.ong_id !== req.userId) {
      return res
        .status(401)
        .json({ error: "You cannot delete an incident that's not yours" });
    }

    if (incidentExists.deleted_at !== null) {
      return res
        .status(400)
        .json({ error: 'You have already deleted this incident' });
    }

    incidentExists.deleted_at = new Date();

    await incidentExists.save();

    return res.status(204).use();
  }
}

export default new IncidentsController();
