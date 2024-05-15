// Sử dụng function để đóng gói logic và giảm lặp code

const handleEnv = () => {
  const environment = process.env.NODE_ENV;

  if (environment === 'development') {
    console.log('development mode');
    // Development-specific logic
  } else if (environment === 'production') {
    console.log('production mode');
    // Production-specific logic
  }
}

console.log('Starting process...');
handleEnv();
console.log('Process started.');