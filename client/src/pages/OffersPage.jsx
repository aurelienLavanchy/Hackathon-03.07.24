import { useLoaderData } from "react-router-dom";

function OffersPage() {
  const [jobsData] = useLoaderData();
  console.info(jobsData);
  return (
    <div>
      {jobsData && jobsData.map((offer) => (
        <p key={offer.id}>
          {" "}
          {offer.title} {offer.description} {offer.contractType}{" "}
          {offer.location}
        </p>
      ))}
    </div>
  );
}

export default OffersPage;
