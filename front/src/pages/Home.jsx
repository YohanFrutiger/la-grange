//src/pages.home.jsx
// Page d'accueil du site
import { useContentSections } from '../hooks/useContentSections';
import HeroSection from "../components/features/HeroSection";
import Line from "../components/layout/Line";
import TargetAudienceCard from "../components/features/TargetAudienceCard";
import Carrousel from "../components/features/Carrousel";
import parse from "html-react-parser";

export default function Home() {

  const contentSections = useContentSections();

  // Filtre les sections spécifiques (rapide, en mémoire)
  const homeIntroSection = contentSections.getSectionByKey('home-presentation');
  const roomsSection = contentSections.getSectionByKey('home-rooms');
  const kitchenAndLivingSection = contentSections.getSectionByKey('kitchen-living');
  const outdoorSection = contentSections.getSectionByKey('outdoor');
  // const targetCardSection = contentSections.getSectionByKey('target-card');
  // const carrouselSection = contentSections.getSectionByKey('carrousel');
  // const targetAudienceCard_individual = contentSections.getSectionByKey('target-individual');
  // const targetAudienceCard_society = contentSections.getSectionByKey('target-society');
  // const targetAudienceCard_community = contentSections.getSectionByKey('target-community');

  // Texte d'introduction de la page d'accueil
  let homeIntroContent;
  if (contentSections.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    homeIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (homeIntroSection) {
    homeIntroContent = (
      <section className="text-center mt-[484px] ">
        <p className="prose mx-auto">{parse(homeIntroSection.content)}</p>
      </section>
    );
  } else {
    homeIntroContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }

  // Section "Les chambres"
  let roomsSectionContent;
  let kitchenAndLivingSectionContent;
  let outdoorSectionContent;
  if (contentSections.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    roomsSection = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (roomsSection) {
    roomsSectionContent = (
      <section className=' mb-8'>
        <div className='md:grid grid-cols-3 gap-8'>
          <div>
            <h3 className=" mb-2 text-left font-bold">{parse(roomsSection.title)}</h3>
            <p className=' ml-1 mb-4 tracking-wide leading-6 font-light text-base'> Chacune avec salle d'eau et WC privatifs et pouvant acceuillir de 2 à 4 personnes</p>
            <p className=' bg-champaign/20 border border-champaign/30 p-4 rounded-lg shadow-xl tracking-wide leading-6 font-normal text-base'>{parse(roomsSection.content)}</p>
          </div>
          <div>
            <h3 className=" mb-2 text-left font-bold">{parse(kitchenAndLivingSection.title)}</h3>
            <p className='ml-1 mb-4 tracking-wide leading-6 font-light text-base'>Une cuisine tout équipée et un grand séjour lumineux de 50 m²</p>
            <p className=' bg-champaign/20 border border-champaign/30 p-4 rounded-lg shadow-xl tracking-wide leading-6 font-normal text-base'>{parse(kitchenAndLivingSection.content)}</p>
          </div>
          <div>
            <h3 className=" mb-2 text-left font-bold">{parse(outdoorSection.title)}</h3>
            <p className='ml-1 mb-4 tracking-wide leading-6 font-light text-base'>Le gîte dispose de 5 chambres pouvant accueillir chacune de 2 à 4 personnes.</p>
            <p className=' bg-champaign/20 border border-champaign/30 p-4 rounded-lg shadow-xl tracking-wide leading-6 font-normal text-base'>{parse(outdoorSection.content)}</p>
          </div>
          



        </div>
      </section>
    );
  } else {
    RoomsSectionContent = <p>Aucune section "home-rooms" trouvée.</p>;
  }

  // Titre de la section Public cible
  // let targetCardSectionTitle;
  // if (contentSections.loading) {
  //   // homeIntroContent = <p>Chargement...</p>;
  // } else if (contentSections.error) {
  //   targetCardSectionTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  // } else if (targetCardSection) {
  //   targetCardSectionTitle = (
  //     <h2 className="mx-auto">{parse(targetCardSection.title)}</h2>
  //   );
  // } else {
  //   targetCardSectionTitle = <p>Aucune section "target-card" trouvée.</p>;
  // }

  // Titre précédant le carrousel
  // let carrouselTitle;
  // if (contentSections.loading) {
  //   // homeIntroContent = <p>Chargement...</p>;   
  // } else if (contentSections.error) {
  //   carrouselTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  // } else if (carrouselSection) {
  //   carrouselTitle = (
  //     <h2 className="text-center mt-16">{parse(carrouselSection.title)}</h2>
  //   );
  // } else {
  //   carrouselTitle = <p>Aucune section "carrousel" trouvée.</p>;
  // }

  // Contenu des cartes pour les publics cibles
  // Particuliers
  // let targetAudienceCard_individualContent;
  // let targetAudienceCard_individualTitle;
  // if (contentSections.loading) {
  //   // targetAudienceCard_individualContent = <p>Chargement...</p>;
  //   // targetAudienceCard_individualTitle = <p>Chargement...</p>;
  // } else if (contentSections.error) {
  //   targetAudienceCard_individualContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  //   targetAudienceCard_individualTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  // } else if (targetAudienceCard_individual) {
  //   targetAudienceCard_individualContent = (
  //     <p>{parse(targetAudienceCard_individual.content)}</p>
  //   );
  //   targetAudienceCard_individualTitle = (
  //     <h3>{parse(targetAudienceCard_individual.title)}</h3>
  //   );
  // } else {
  //   targetAudienceCard_individualContent = <p>Aucune section "home-presentation" trouvée.</p>;
  // }

  // Entreprises
  // let targetAudienceCard_societyContent;
  // let targetAudienceCard_societyTitle;
  // if (contentSections.loading) {
  //   // targetAudienceCard_societyContent = <p>Chargement...</p>;
  //   // targetAudienceCard_societyTitle = <p>Chargement...</p>;
  // } else if (contentSections.error) {
  //   targetAudienceCard_societyContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  //   targetAudienceCard_societyTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  // } else if (targetAudienceCard_society) {
  //   targetAudienceCard_societyContent = (
  //     <p>{parse(targetAudienceCard_society.content)}</p>
  //   );
  //   targetAudienceCard_societyTitle = (
  //     <h3>{parse(targetAudienceCard_society.title)}</h3>
  //   );
  // } else {
  //   targetAudienceCard_societyContent = <p>Aucune section "home-presentation" trouvée.</p>;
  // }

  // Collectivités
  // let targetAudienceCard_communityContent;
  // let targetAudienceCard_communityTitle;
  // if (contentSections.loading) {
  //   // targetAudienceCard_communityContent = <p>Chargement...</p>;
  //   // targetAudienceCard_communityTitle = <p>Chargement...</p>;
  // } else if (contentSections.error) {
  //   targetAudienceCard_communityContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  //   targetAudienceCard_communityTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  // } else if (targetAudienceCard_community) {
  //   targetAudienceCard_communityContent = (
  //     <p>{parse(targetAudienceCard_community.content)}</p>
  //   );
  //   targetAudienceCard_communityTitle = (
  //     <h3>{parse(targetAudienceCard_community.title)}</h3>
  //   );
  // } else {
  //   targetAudienceCard_communityContent = <p>Aucune section "home-presentation" trouvée.</p>;
  // }


  return (
    <>
      <HeroSection />

      {homeIntroContent}

      <div className="mt-8 max-w-4xl flex flex-col sm:flex-row justify-between gap-3 mx-auto">
        <div className='text-center'>
          <p className='text-6xl sm:text-9xl sm:mb-4'>🌳</p>
          <p>Calme et nature</p>
        </div>
        <div className='text-center'>
          <p className='text-6xl sm:text-9xl sm:mb-4'>🚲</p>
          <p>Plein air</p>
        </div>
        <div className='text-center'>
          <p className='text-6xl sm:text-9xl sm:mb-4'>🍽️</p>
          <p>Gastronomie</p>
        </div>
      </div>

      <Line />
      {roomsSectionContent}

      {/* {targetCardSectionTitle} */}

      {/* <div className="gap-4 grid grid-cols-1 md:grid-cols-3  mb-12 mt-8">
        <div>
          <TargetAudienceCard
            icon="🏡"
            title={targetAudienceCard_individualTitle}
            text={targetAudienceCard_individualContent}
          />
        </div>
        <div className>
          <TargetAudienceCard
            icon="🏢"
            title={targetAudienceCard_societyTitle}
            text={targetAudienceCard_societyContent}
          />
        </div>
        <div>
          <TargetAudienceCard
            icon="🏛️"
            title={targetAudienceCard_communityTitle}
            text={targetAudienceCard_communityContent}
          />
        </div>
      </div> */}

      {/* {carrouselTitle}
      <Carrousel /> */}

    </>
  )
}