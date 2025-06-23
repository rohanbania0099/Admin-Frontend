const config = {
    apiUrl: 'https://backend-repository-o6ai.onrender.com', // Will be updated after backend deployment
    environment: 'production',
    endpoints: {
        login: '/api/admin/login',
        dashboard: '/api/admin/dashboard',
        movies: '/api/movies'
    }
};

if (config.environment === 'production') {
    console.log = () => {};
}

window.APP_CONFIG = config; 
