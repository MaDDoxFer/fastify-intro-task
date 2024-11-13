import _ from "lodash";
import fastify from "fastify";
import getUsers from "./utils.js";

export default () => {
  const app = fastify();

  const users = getUsers();

  // BEGIN (write your solution here)
  app.get('/users', (req, res) => {
    const { page = 1, per = 5 } = req.query;
    res.send(users.slice((page - 1) * per, page * per));
});

  // END

  return app;
};
