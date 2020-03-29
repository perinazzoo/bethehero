import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import IncidentController from './app/controllers/IncidentController';
import DashboardController from './app/controllers/DashboardController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/incidents', IncidentController.index);

routes.use(authMiddleware);

routes.get('/dashboard', DashboardController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.put('/users', UserController.update);

export default routes;
