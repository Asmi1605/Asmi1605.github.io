db.employees.find(
    {salary:{$gt:3000}},
    {name:1}
).limit(2).skip(1)
db.employees.find(
   {$or: [{salary:{$gt:3000}},{department:"IT"}]},
    {name:1}
).limit(2).skip(1)
db.employees.countDocuments()
db.employees.aggregate([
{$match:{salary:{$gt:3000}}},
{$project:{name:1,salary:1}}

])
db.employees.aggregate([
{$match:{salary:{$gt:3000}}},
{$project:{name:1,salary:1}},
{$sort:{name:1}},
{$limit:1}
])

db.employees.aggregate([

    {$project: {_id:0,name:1,location:1}},
]
);
db.employees.aggregate([

    {$project: {_id:0,name:1,location:1}},
    {$unwind:"$location"}
]
);
db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}
);

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:{"$salary":2}}
    }}
]);
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localfield:"_id",
        foreignField:"empId",
        as:"orders"
    },},
])

db.orders.insertOne({
 orderValue:5000,
 empId:ObjectId('685bc4c47939239aa9748a64')
})

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localfield:"_id",
        foreignField:"empId",
        as:"orders"
    },},
])
db.orders.insertOne({
 orderValue:5000,
 empId:ObjectId('685bc4c47939239aa9748a64')
})

db.employees.aggregate([
    {$lookup:{
        from:"emp",
        localfield:"country",
        foreignField:"empId",
        as:"empcountry"
    },},
     {$lookup:{
        from:"orders",
        localfield:"name",
        foreignField:"empId",
        as:"orders"
    },},

])
db.employees.createIndex({"email":1});
db.employees.getIndexes();
db.employees.dropIndex("email_1");
db.employees.find({email:"john@gmail.com"}).explain("executionStats");

db.employees.aggregate([
    {$group:{country:"$country",name:"$name"},
total:{$sum:"$score"}}
]

)

db.employees.aggregate([
    {$group:{_id:{country:"$country",name:"$name"},
total:{$sum:"$score"}}}
]

)
