import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();

const creatUser = async () => {
    await client.user.create({
        data: {
            username: "virendra",
            password: "viremdra",
            age: 22,
            city: "karad"
        }
    })
}


creatUser();