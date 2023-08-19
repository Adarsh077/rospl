import cassandra from "npm:cassandra-driver";

const client = new cassandra.Client({
  contactPoints: ["127.0.0.1"],
  localDataCenter: "datacenter1",
  keyspace: "rospl",
});

client
  .connect()
  .then(async () => {
    console.log("Connected to Scylla cluster");
    const resp = await client.execute("SELECT * from buildings");
    console.log(resp.rows);
    // Your queries and interactions with Scylla go here
  })
  .catch((err) => console.error("Error connecting to Scylla:", err));
