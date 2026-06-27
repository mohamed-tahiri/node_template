import sequelize from "./db-connection";
import User from "./models/User.model";

(async () => {
  await sequelize.sync({ force: true });

  User.create({
    name: "Hala",
  });
})();
