const mongoose = require('mongoose');
const mongoURI = "mongodb://chamindu77:Cn991893105@ac-b4vde1u-shard-00-00.d9kjiyz.mongodb.net:27017,ac-b4vde1u-shard-00-01.d9kjiyz.mongodb.net:27017,ac-b4vde1u-shard-00-02.d9kjiyz.mongodb.net:27017/fruitsexpress?ssl=true&replicaSet=atlas-zmx0m8-shard-0&authSource=admin&retryWrites=true&w=majority"
// "mongodb+srv://chamindu77:Cn991893105@cluster0.d9kjiyz.mongodb.net/fruitsexpress?retryWrites=true&w=majority"
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("fruitsData");
            fetched_data.find({}).toArray(async function (err, data) {
                const fruitsCategory = await mongoose.connection.db.collection("fruitsCategory");
                fruitsCategory.find({}).toArray(function (err, catData) {


                    if (err) console.log(err);
                    else {
                        global.fruitsData = data;
                        global.fruitsCategory = catData;

                    }
                })

            })

        }
    });
}

module.exports = mongoDB;