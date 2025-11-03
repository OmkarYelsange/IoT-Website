## IoT-Website App


# IoT Website - Smart Device Management Platform

![IoT Website](https://img.shields.io/badge/IoT-Platform-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-orange)

A comprehensive web-based platform for managing and monitoring IoT devices in real-time. This application provides a centralized dashboard to control smart devices, visualize sensor data, and automate IoT ecosystems.

## 🚀 Features

### Core Functionality
- **Real-time Device Monitoring** - Live data streaming from connected IoT devices
- **Device Management** - Add, remove, and configure smart devices
- **Dashboard Analytics** - Visualize sensor data with interactive charts
- **Automation Rules** - Create custom automation scenarios
- **User Management** - Multi-user support with role-based access
- **Mobile Responsive** - Optimized for all device sizes

### Technical Features
- **Real-time Updates** - WebSocket integration for instant data sync
- **Data Visualization** - Interactive charts and graphs
- **RESTful API** - Well-structured API for external integrations
- **Secure Authentication** - JWT-based user authentication
- **Database Integration** - Efficient data storage and retrieval

## 🛠️ Tech Stack

### Frontend
- **React Js HTML5** - Semantic markup structure
- **TailwindCSS** - Modern styling with Flexbox/Grid
- **JavaScript** - Interactive functionality
- **Chart.js** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication

### Database
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling

### Security & Tools
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Environment Variables** - Secure configuration management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

```
git clone https://github.com/OmkarYelsange/IoT-Website.git 
cd IoT-Website
npm install
```

2. Environment Configuration Create a .env file in the root directory:

```
env
PORT=3000  
MONGODB_URI=mongodb://localhost:27017/iot-website
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

3. Database Setup Ensure MongoDB is running on your system:

```
mongod
```

4. Start the application

```
# Development mode
npm run dev
   
# Production mode
npm star
```

5. Access the application Open your browser and navigate to http://localhost:3000

🏗️ Project Structure

```
IoT-Website/
├── public/                 # Static files
│   ├── css/               # Stylesheets
│   ├── js/                # Client-side JavaScript
│   ├── images/            # Assets and icons
│   └── charts/            # Chart configurations
├── src/                   # Source code
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   └── config/            # Configuration files
├── views/                 # Frontend templates
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

🔌 API Documentation

Device Management Endpoints

Method Endpoint Description
GET /api/devices Get all devices
POST /api/devices Add new device
PUT /api/devices/:id Update device
DELETE /api/devices/:id Remove device
GET /api/devices/:id/data Get device data

Authentication Endpoints

Method Endpoint Description
POST /api/auth/register User registration
POST /api/auth/login User login
GET /api/auth/verify Verify token

🎯 Usage Guide

Adding a New Device

1. Navigate to the Devices section
2. Click "Add New Device"
3. Enter device details (name, type, location)
4. Configure device parameters
5. Save to register the device

Creating Automation Rules

1. Go to Automation section
2. Define trigger conditions
3. Set action parameters
4. Activate the rule
5. Monitor execution logs

Viewing Analytics

1. Access the Dashboard
2. Select time range for data
3. Choose visualization type
4. Export data if needed

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

🔮 Future Enhancements

· Mobile application development
· Advanced machine learning analytics
· Multi-language support
· Cloud deployment options
· Third-party integrations
· Advanced security features
· Data export capabilities

🙏 Acknowledgments

· Icons and graphics providers
· Open-source libraries and frameworks
· Contributors and testers
· IoT community for inspiration

---

<div align="center">

Built with ❤️ by Omkar Yelsange

⭐ Star this repo if you found it helpful!

</div>

