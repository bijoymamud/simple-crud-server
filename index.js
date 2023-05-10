const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

//middlewire error solving

app.use(cors());
app.use(express.json());

//bijoymamud09
// GXSDHxCEn3ZfkdAW


//copied from mongoDB


const uri = "mongodb+srv://bijoymamud09:GXSDHxCEn3ZfkdAW@cluster0.vrgzzke.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("usersDB");
        const userCollection = database.collection("users");

        //for getting data in the server
        //client server theke data niye asar jnno
        app.get('/users', async (req, res) => {
            const cursor = userCollection.find()
            const result = await cursor.toArray();
            res.send(result);
        })

        //client server theke data niye asar jnno
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = await userCollection.findOne(query);
            res.send(user)
        })

        //for setting data 
        //client server theke data niye asar jnno
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log('new user', user);
            const result = await userCollection.insertOne(user);
            res.send(result)
        })

        //updating data

        //client server theke data niye asar jnno

        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            console.log(user);
            console.log(id, user);
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true }
            const updatedUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const result = await userCollection.updateOne(filter, updatedUser, option)
            res.send(result)
        })

        // for deleteing from the UI

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            console.log('please delete id:', id);
            const query = { _id: new ObjectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




//!showing text on the Body
app.get('/', (req, res) => {
    res.send("Welcome to Simple Crud Server")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})