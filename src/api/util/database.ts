import fs from 'fs';

import { GoalModel } from '../../common/interface/GoalModel';

const BasePath = `${process.env.APPDATA}/task-board`;

type DB = {
  goals?: GoalModel[];
};

class Database {
  private static instance: Database;
  private static connection: DB;

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    !fs.existsSync(BasePath) && fs.mkdirSync(BasePath);
    !fs.existsSync(`${BasePath}/db`) && fs.mkdirSync(`${BasePath}/db`);
    !fs.existsSync(`${BasePath}/db/data.json`) &&
      fs.writeFileSync(`${BasePath}/db/data.json`, '{}');

    const data = fs.readFileSync(`${BasePath}/db/data.json`, {
      encoding: 'utf8',
    });

    Database.connection = JSON.parse(data);

    return Database.instance;
  }

  public getData(): DB {
    return Database.connection;
  }

  public setData(data: DB): void {
    fs.writeFileSync(`${BasePath}/db/data.json`, JSON.stringify(data));
  }
}

export default Database;
