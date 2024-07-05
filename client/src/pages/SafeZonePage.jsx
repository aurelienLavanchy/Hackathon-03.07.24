import "./SafeZonePage.css";

export default function TipsPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button type="button" onClick={handleBack} className="backButton">
        Retour
      </button>
      <div className="tips-container">
        <h1 className="title">Les Incontournables à Lire</h1>
        <p className="texte">
          "Découvrez notre espace dédié à l'inclusion dans la tech, où vous
          trouverez une mine d'informations et des témoignages inspirants.
          Explorez nos articles informatifs et engageants qui mettent en lumière
          les défis et les réussites liés à l'inclusion dans le domaine
          technologique. Plongez-vous dans des perspectives diversifiées pour
          enrichir votre compréhension et stimuler la discussion sur la
          diversité et l'équité dans la tech. Bientôt retrouvez des témoignages
          de personnes sous-représentées dans le milieu de la tech."
        </p>
        <div className="article">
          <h1 className="article-title">
            L'Accessibilité Numérique: Vers une Tech Inclusive
          </h1>
          <p className="article-content">
            L'accessibilité numérique est à la fois un défi et une opportunité
            pour l'industrie de la tech. En s'assurant que les produits
            technologiques soient accessibles à tous, les entreprises peuvent
            non seulement répondre à des exigences éthiques et légales, mais
            aussi se démarquer sur le marché <br />
            <a
              href="https://www.kaliop.com/fr/accessibilite-numerique-comment-le-design-inclusif-repond-au-handicap/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              Lire plus
            </a>
          </p>
        </div>
        <div className="article">
          <h1 className="article-title">
            L'Inclusivité dans la Tech: Promouvoir la Participation des Femmes
          </h1>
          <p className="article-content">
            L'industrie technologique, autrefois dominée par les hommes, évolue
            pour devenir plus inclusive. L'un des aspects les plus critiques de
            cette transformation est l'augmentation de la participation des
            femmes dans le secteur de la tech. Cependant, malgré les progrès
            réalisés, des obstacles subsistent, et il est crucial de continuer à
            promouvoir une culture d'inclusivité. <br />
            <a
              href="https://weborama.com/2023/11/favoriser-linclusion-des-femmes-dans-la-tech-et-la-data-un-imperatif-pour-lavenir-de-notre-industrie/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              Lire plus
            </a>
          </p>
        </div>
        <div className="article">
          <h1 className="article-title">
            Entreprises Ouvertes d'Esprit dans la Tech: Un Engagement pour la
            Diversité et l'Inclusion
          </h1>
          <p className="article-content">
            Dans un monde où l'innovation est essentielle, les entreprises
            technologiques qui embrassent la diversité et l'inclusion se
            démarquent. Ces entreprises comprennent que des équipes
            diversifiées, représentant différentes perspectives et expériences,
            sont cruciales pour résoudre des problèmes complexes et développer
            des produits innovants. Elles ouvrent leurs portes à la différence,
            créant des environnements où chacun se sent valorisé et capable de
            contribuer pleinement. <br />
            <a
              href="https://courriercadres.com/inclusion-et-diversite-dans-la-tech-lexemple-de-qonto/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              Lire plus
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
