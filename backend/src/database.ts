import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:1234@localhost:3306/pitu');

export default sequelize;