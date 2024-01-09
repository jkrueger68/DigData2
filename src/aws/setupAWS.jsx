// Import AWS SDK
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  region: 'us-west-2', // replace with your desired region
  accessKeyId: 'your-access-key-id', // replace with your AWS access key ID
  secretAccessKey: 'your-secret-access-key', // replace with your AWS secret access key
});

// Create DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

// Define your function to perform a DynamoDB operation (e.g., create a new item)
const createItem = async () => {
  const params = {
    TableName: 'YourTableName', // replace with your table name
    Item: {
      'YourPrimaryKey': { S: 'ExampleItem' }, // replace with your primary key and an example item
      // Add additional attributes here
    },
  };

  try {
    const data = await ddb.putItem(params).promise();
    console.log('Item created successfully:', data);
  } catch (error) {
    console.error('Error creating item:', error);
  }
};

// Call the function to create a new item
createItem();