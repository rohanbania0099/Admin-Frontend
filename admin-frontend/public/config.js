const config = {
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
    isAdmin: true
};

if (config.environment === 'production') {
    console.log = () => {};
}

window.APP_CONFIG = config; 