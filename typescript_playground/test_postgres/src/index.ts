import { Client } from "pg";


const connectionString = ""

const pgClient = new Client(connectionString);

const main = async () => {
    await pgClient.connect();

    const getResp = await pgClient.query("SELECT * FROM USERS;")
    console.log(getResp)
}

main()