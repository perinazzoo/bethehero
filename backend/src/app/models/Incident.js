import Sequelize, { Model } from 'sequelize';

class Incidents extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.DECIMAL,
        material: Sequelize.STRING,
        ong_id: Sequelize.INTEGER,
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'ong_id' });
  }
}

export default Incidents;
