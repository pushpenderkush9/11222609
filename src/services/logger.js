// // Simple logging middleware
// export const logEvent = (message, data = {}) => {
//   const log = {
//     timestamp: new Date().toISOString(),
//     message,
//     data,
//   };
//   console.table(log);
// };
export const logEvent = (message, data = {}) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
    data,
  };
  console.table(log);
};
