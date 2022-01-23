const { ObjectID } = require('mongodb')

module.exports = {
    Query: {
        total: (parent, args, {db}) => db.collection(`todos`).estimatedDocumentCount(),
        all: (parent, args, {db}) => db.collection(`todos`).find().toArray(), 
    },

    Mutation: {
        async newTodo(parent, args, {db}) {
            var newtodo = {
                ...args,
                complete: false
            }
            await db.collection(`todos`).insertOne(newtodo)
            return newtodo
        },

        async changeTitle(parent, args, {db}) {        
            const oldOne = await db.collection(`todos`).findOne({_id: ObjectID(args.id)});            
            let newOne = {...oldOne};
            newOne.title = args.title;
            await db.collection(`todos`).replaceOne(oldOne, newOne);
            return newOne;
        },

        async changeComplete(parent, args, {db}) {
            const oldOne = await db.collection(`todos`).findOne({_id: ObjectID(args.id)});            
            let newOne = {...oldOne};
            newOne.complete = args.complete;
            await db.collection(`todos`).replaceOne(oldOne, newOne);
            return newOne;
        },

        async delete(parent, args, {db}) {
            await db.collection(`todos`).remove({_id: ObjectID(args.id)}); 
            return args.id;
        }
    }
}

