const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());
const origin_url = process.env.FRONTEND_SERVER_ORIGIN;
const corsOptions = {
    origin: origin_url,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and authentication headers (if needed)
};
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));
// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect(process.env.MONGODB_URI,{dbName:"Rust-Site"});
const db = mongoose.connection;

// Check for MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for your entries
const shopItems = new mongoose.Schema({
  name: String,
  preview_description: String,
  description: String,
  price: Number,
  image: String,
  id: Number,
  category: String,
  buttonlink: String
});
const ads = new mongoose.Schema({
  title: String,
  discount: String,
  image: String,
  button: String,
  buttonlink: String,
});
const sayings = new mongoose.Schema({
  user: String,
  desc: String,
  position: String,
  image: String,
});
const categories = new mongoose.Schema({
  name: String,
  id: Number,
});

// Create a Mongoose model for user patterns
const UserPattern = mongoose.model('Sayings', sayings);
// Create a Mongoose model for VIP upgrades
const VIPUpgrade = mongoose.model('Ads', ads);
// Create a Mongoose model based on the schema
const Entry = mongoose.model('Shop', shopItems);
const Categories = mongoose.model('Categories', categories);
app.get('/',(req,res)=>{
    console.log('success')
    res.send(200).json({message:'Success'})
})
app.post('/add-entry', async (req, res) => {
  try {
    const { name, preview_description, description, price, image, id, category, buttonlink } = req.body;

    // Create a new entry using the Mongoose model
    const newEntry = new Entry({
      name,
      preview_description,
      description,
      price,
      image,
      id,
      category,
      buttonlink
    });

    // Save the entry to the database
    await newEntry.save();

    res.status(201).json({ message: 'Entry added successfully', entry: newEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/add-vip-upgrade', async (req, res) => {
  try {
    const { title, discount, image, button, buttonlink } = req.body;

    // Create a new VIP upgrade using the Mongoose model
    const newVIPUpgrade = new VIPUpgrade({
      title,
      discount,
      image,
      button,
      buttonlink,
    });

    // Save the VIP upgrade to the 'vipupgrades' collection
    await newVIPUpgrade.save();

    res.status(201).json({ message: 'VIP Upgrade added successfully', vipUpgrade: newVIPUpgrade });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/add-user-pattern', async (req, res) => {
  try {
    const { user, desc, position, image } = req.body;

    // Create a new user pattern using the Mongoose model
    const newUserPattern = new UserPattern({
      user,
      desc,
      position,
      image,
    });

    // Save the user pattern to the 'userpatterns' collection
    await newUserPattern.save();

    res.status(201).json({ message: 'User Pattern added successfully', userPattern: newUserPattern });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/add-category', async (req, res) => {
  try {
    const { name,id } = req.body;

    // Create a new user pattern using the Mongoose model
    const newCategory = new Categories({
      name,
      id
    });

    // Save the user pattern to the 'userpatterns' collection
    await newCategory.save();

    res.status(201).json({ message: 'Category added successfully', Categories: newCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-entries', async (req, res) => {
  try {
    // Retrieve all entries from the 'entries' collection
    const entries = await Entry.find();
    res.status(200).json({ entries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-vip-upgrades', async (req, res) => {
  try {
    // Retrieve all VIP upgrades from the 'vipupgrades' collection
    const vipUpgrades = await VIPUpgrade.find();
    res.status(200).json({ vipUpgrades });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-user-patterns', async (req, res) => {
  try {
    // Retrieve all user patterns from the 'userpatterns' collection
    const userPatterns = await UserPattern.find();
    res.status(200).json({ userPatterns });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/all-data',async (req,res)=>{
  try {
    // Retrieve all data
    const entries = await Entry.find();
    const vipUpgrades = await VIPUpgrade.find();
    const userPatterns = await UserPattern.find();
    const cat = await Categories.find();
    res.status(200).json({ sayings:userPatterns, ads:vipUpgrades, shopItems:entries, categories:cat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});