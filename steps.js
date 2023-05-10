/**
 * MONGOdb connectin
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP addrsss
 * 4. Datbase > connect > driver > node > view full code
 * 5. change the password the uri
 * 
 * 
 * SErver Site
 *----- --- ---- ---- ---- -- --- --- ---- ----- 
 * Create ---post
 * app.post('/users' ,async(req, res)=>{})
 * make the function async to use await insite it
 * go to mongoDB crud documentation
 >>Make sure you use the express.json() middlewire

 * access data from the body: const user = req.body
 
 * const result= await  userCollection.insertOne(user)
 * res.send(result) 
 * 
 * 
 * 
 * 
 * CLient Side
 * ------- ---- ----- ---- --- ---- ------ ---------
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * add headers: {'content-type' : 'application/json'}
 * add body: JSON.Stringify(user)
 * 
 * 
 * 
 * 
 * 
 * READ
 * --- ----- ----- --- ----------- ----- ------- 
 * 
 * 1.create a cursor = userCollection.find()
 * const result = await cursor.toArray()
 * 
 * 
 * 
 * 
 * delete
 * ----- ------ --------- ---------- 
 * 1.create app.delete('/users/id', async(req, res)=>{})
 * spcecify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4.const result= await  userCollection.deleteOne(query)
 * 
 * 
 * 
 * 
 * 
 * client site
 * ------------------------
 * 1. create dynamic url with id
 * 2. make sure to mention DELETE method
 *  */
