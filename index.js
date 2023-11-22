import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { appRouter } from "./router/index.js";
import { cassandraClient } from "./service/cassandra.service.js";

cassandraClient
  .connect({
    contactPoints: ["127.0.0.1"],
    localDataCenter: "datacenter1",
    keyspace: "rospl",
  })
  .then(() => console.log("DB connected!!"))
  .catch((err) => console.error(err));

const app = new Application();

app.use(appRouter.routes());

app.addEventListener("listen", () => {
  console.log("App is running on http://localhost:8000");
});

await app.listen({hostname: '13.233.186.190', port: 8000 });
