import { useLoaderData } from "react-router-dom";

export default function EntrepriseDetailsPage() {
  const companyDetails = useLoaderData();
  console.info(companyDetails);

  return (
    <div>
      <h1>Nom</h1>
      <p>contenu</p>
    </div>
  );
}
