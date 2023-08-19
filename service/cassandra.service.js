import cassandra from "npm:cassandra-driver";

class CassandraClient {
  constructor() {
    this.client = null;
  }

  async connect(options) {
    this.client = new cassandra.Client(options);
    return await this.client.connect();
  }

  async execute(...args) {
    if (!this.client) {
      console.error("DB not connected!");
      return null;
    }

    return await this.client.execute(args[0], args[1]);
  }
}

export const cassandraClient = new CassandraClient();
