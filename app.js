import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

import {graphqlHTTP} from 'express-graphql';
import resolvers from './graphql/resolver';
import schema  from './graphql/schema';

const app = express();
const PORT = 5000;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const root=resolvers;

// sample client query http://localhost:5000/graphql?query={getCategory(parentId:1){categoryId}}
// sample client query http://localhost:5000/graphql?query={getCategory{categoryId categoryName parentId}}
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});



