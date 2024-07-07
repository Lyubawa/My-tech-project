// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCamperbyId } from "../catalog-api";

// export default function CamperDetails() {
//   const { advertId } = useParams();
//   const [advert, setAdvert] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const data = await getCamperbyId(advertId);
//         setAdvert(data);
//       } catch (error) {}
//     }
//     getData();
//   }, [advertId]);

//   return (
//     <div>
//       <p>Details: {advertId}</p>
//       {advert && (
//         <div>
//           <p>Name: </p>
//         </div>
//       )}
//     </div>
//   );
// }
