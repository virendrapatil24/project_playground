import { Client } from "pg";


const connectionString = "postgresql://neondb_owner:npg_fMkRVl1wHCi9@ep-tiny-brook-a80nn8ym-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"

const pgClient = new Client(connectionString);

const main = async () => {
    await pgClient.connect();

    const getResp = await pgClient.query("SELECT * FROM USERS;")
    console.log(getResp)
}

main()