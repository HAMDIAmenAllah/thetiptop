"use client";
import React from "react";

// import custon component


const MentionsLegales = () => {
  // console.log(formik.values);

  return (
    <section className="w-full mx-auto text-white">
      <div className="flex flex-col space-y-10 text-justify mx-10">
        <h1 className="text-center">Mentions légales</h1>
        <br />
        <p>Le présent site internet accessible à l'adresse <a href="http://www.thetiptop.com">www.thetiptop.com</a>
          (ci-après désigné "le Site") est édité par la société ThéTipTop, dont le siège social est situé au
          18 rue Léon Frot, 75011 Paris, immatriculée au Registre du Commerce et des Sociétés de Paris sous le
          numéro SIRET 41904518200054, et dont le code NAF est "Autres commerces de détail alimentaires en
          magasin" (4729Z).
        </p>
        <br />
        <p>Directeur de la publication : Monsieur Eric BOURDON, gérant de la société ThéTipTop.</p>
        <br />
        <p>Contact : Pour toute question ou demande d'information concernant la société, vous pouvez nous
          contacter à l'adresse électronique suivante : <a href="mailto:legales@thetiptop.com">legales@thetiptop.com</a>.</p>
        <br />
        <p>Hébergeur : Le présent site internet est hébergé par IONOS 1&1, dont le siège social est situé au
          7 place de la Gare, 57200 Sarreguemines, France.</p>
        <br />
        <p>Agence web : FuironsDuck, société spécialisée dans la création de sites web, dont le siège social est
          situé au 22 Rue des vignerons, 94300 Vincennes.</p>
        <br />
        <h2 className="underline decoration-white">Finalité du Traitement des Données</h2>
        <br />
        <p>Les données collectées sur ce site internet sont traitées pour les finalités suivantes :</p>
        <ul>
          <li>Gestion de la relation client et des services associés</li>
          <li>Envoi d'informations commerciales et promotionnelles relatives à nos produits et services</li>
          <li>Réalisation de statistiques et analyses de marché</li>
        </ul>
        <br />
        <h2 className="underline decoration-white">Base Juridique du Traitement</h2>
        <br />
        <p>La base juridique du traitement des données est le consentement de la personne concernée, ainsi que
          l'exécution des contrats et des obligations légales.</p>
        <br />
        <h2 className="underline decoration-white">Destinataire des Données</h2>
        <br />
        <p>Les destinataires des données collectées sur ce site internet sont les services internes de la société
          ThéTipTop en charge de la gestion des commandes, de la relation client, des services associés et de la
          prospection commerciale.
        </p>
        <br />
        <h2 className="underline decoration-white">Durée de Conservation des Données</h2>
        <br />
        <p>Les données collectées sur ce site internet sont conservées pendant une durée de deux ans à compter de la
          collecte.</p>
        <br />
        <h2 className="underline decoration-white">Protection des Données Personnelles</h2>
        <br />
        <p>La société ThéTipTop attache une grande importance à la protection de vos données personnelles. Nous mettons en
          œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la
          confidentialité de vos données personnelles.</p>
        <p>En conformité avec le Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
          de rectification, d'opposition et de suppression de vos données personnelles. Vous pouvez exercer ces droits en
          nous contactant à l'adresse électronique suivante : <a href="mailto:dpo@thetiptop.com">dpo@thetiptop.com</a>.</p>
        <p>Le délégué à la protection des données est Monsieur Eric BOURDON, joignable à l'adresse électronique suivante :
          <a href="mailto:dpo@thetiptop.com">dpo@thetiptop.com</a>.</p>
        <br />
        <h2 className="underline decoration-white">Transfert Hors UE</h2>
        <br />
        <p>Les données collectées sur ce site internet peuvent faire l'objet d'un transfert hors de l'Union Européenne. Ce
          transfert est encadré par des clauses contractuelles types de la Commission européenne visant à garantir un
          niveau de protection adéquat des données personnelles transférées.</p>
        <br />
        <h2 className="underline decoration-white">Cookies</h2>
        <br />
        <p>ThéTipTop peut être amené à utiliser des cookies pour le fonctionnement de son site web. Les utilisateurs sont
          informés de cette utilisation et peuvent s'opposer à l'utilisation de ces cookies en modifiant les paramètres de
          leur navigateur.</p>
        <br />
        <h2 className="underline decoration-white">Jeu Concours</h2>
        <br />
        <p>Le présent site web propose un jeu concours. Les règles du jeu sont disponibles sur <a
          href="https://www.thetiptop.com/jeu-concours">https://www.thetiptop.com/jeu-concours</a>.</p>
        <p>Le jeu concours est ouvert à toute personne résidant en France métropolitaine, âgée de plus de 12 ans. Les
          employés de ThéTipTop et de ses partenaires ne sont pas autorisés à participer.</p>
        <p>Toute personne ayant un ticket valide est gagnante. Le tirage au sort est effectué après validation du formulaire
          de jeu concours. Vous pourrez ensuite aller en boutique pour retirer l’élément que vous aurez gagné.</p>
        <p>ThéTipTop se réserve le droit d'annuler le jeu concours en cas de force majeure ou si les circonstances
          l'exigent.</p>
        <br />
      </div>
    </section>
  );
};

export default MentionsLegales;
