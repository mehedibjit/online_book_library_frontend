// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import axiosInstance from '../../../utils/axiosInstance';

// const BookReserve = ({ bookId, availabilityStatus, onReserveSuccess }) => {
//   const [isReserving, setIsReserving] = useState(false);

//   const handleReserve = () => {
//     setIsReserving(true);

//     axiosInstance
//       .post(`/books/${bookId}/reserve`)
//       .then((response) => {
//         onReserveSuccess(response.data);
//       })
//       .catch((error) => {
//         console.error('Error reserving book:', error);
//         setIsReserving(false);
//       });
//   };

//   return (
//     <div>
//       {availabilityStatus === 'AVAILABLE' && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleReserve}
//           disabled={isReserving}
//         >
//           Reserve Book
//         </Button>
//       )}
//     </div>
//   );
// };

// export default BookReserve;