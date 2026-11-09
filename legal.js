const LG={
mentions:['Mentions légales',`<p><b>Éditeur :</b> DEPANNE31 — [forme juridique et capital à compléter], [adresse à compléter], Toulouse.<br><b>SIRET :</b> [à compléter]<br><b>Téléphone :</b> 07 82 18 63 13<br><b>Directeur de la publication :</b> [nom à compléter]</p>
<p><b>Hébergeur :</b> [nom et adresse de l’hébergeur à compléter] (en démo : poste local).</p>
<p><b>Propriété intellectuelle :</b> les textes, visuels et le code du site sont protégés. Toute reproduction sans autorisation est interdite.</p>
<p class="t">Projet réalisé dans le cadre d’un BTS SIO SLAM : version de démonstration.</p>`],
cgu:['Conditions générales d’utilisation',`<p><b>1. Objet.</b> DEPANNE31 met en relation des particuliers de Toulouse et son agglomération avec des artisans (serrurerie, plomberie, électricité, chauffage).</p>
<p><b>2. Compte.</b> La création d’une demande d’intervention nécessite un compte. Les informations fournies doivent être exactes ; l’identifiant et le mot de passe sont personnels.</p>
<p><b>3. Rôles.</b> Le <i>client</i> crée des demandes et paie. Le <i>technicien</i> (compte validé par un administrateur) valide les demandes qu’il peut honorer et réalise l’intervention. L’<i>administrateur</i> modère la plateforme.</p>
<p><b>4. Fonctionnement.</b> Une demande est validée par un technicien disponible ; le client peut ensuite payer. En l’absence de technicien disponible, la demande reste en attente.</p>
<p><b>5. Comportement.</b> Les informations, photos et avis publiés doivent être licites et sincères. Un compte peut être suspendu en cas d’abus.</p>
<p><b>6. Responsabilité.</b> La plateforme met en relation ; l’intervention est réalisée sous la responsabilité de l’artisan. Le service peut être interrompu pour maintenance.</p>
<p><b>7. Droit applicable.</b> Droit français. Tribunaux compétents : [à compléter].</p>`],
cgv:['Conditions générales de vente',`<p><b>1. Prix.</b> Les prix sont fixes, affichés en euros TTC (TVA 20 %) pour chaque service. Les urgences ont un tarif <b>jour (8h–20h)</b> et un tarif <b>nuit (20h–8h)</b>, appliqué automatiquement selon l’heure de la demande (heure de Toulouse). Le prix affiché au moment de la demande est celui facturé.</p>
<p><b>2. Commande et paiement.</b> Le client paie après validation de la demande par un technicien. Le paiement est exigible avant le début de l’intervention. (Démo : paiement simulé.) Une facture est disponible après paiement.</p>
<p><b>3. Annulation et remboursement.</b> Annulation gratuite tant que l’intervention n’a pas démarré. Si le client a déjà payé, il est intégralement remboursé. Une fois l’intervention en cours, elle ne peut plus être annulée en ligne.</p>
<p><b>4. Droit de rétractation.</b> Pour une urgence demandée expressément par le client, le droit de rétractation de 14 jours peut ne pas s’appliquer (code de la consommation, art. L221-28) ; [à faire valider avant mise en production].</p>
<p><b>5. Garantie et réclamations.</b> Les garanties légales s’appliquent. Réclamation : via la page de contact ou par téléphone au 07 82 18 63 13.</p>
<p><b>6. Médiation.</b> Le client peut recourir gratuitement à un médiateur de la consommation : [nom et coordonnées à compléter].</p>`],
rgpd:['Politique de confidentialité (RGPD)',`<p><b>Responsable du traitement :</b> DEPANNE31, [adresse et email de contact à compléter].</p>
<p><b>Données collectées :</b> nom, email, téléphone, mot de passe (stocké haché), adresse d’intervention, description et photo éventuelle, créneau, historique des demandes, paiements simulés, avis.</p>
<p><b>Finalités :</b> gestion du compte, mise en relation client/technicien, paiement et facturation, notifications, amélioration du service.</p>
<p><b>Base légale :</b> exécution du contrat ; obligation légale (facturation) ; intérêt légitime (sécurité).</p>
<p><b>Destinataires :</b> les techniciens uniquement pour les demandes qu’ils prennent en charge, et l’administrateur. Aucune revente de données.</p>
<p><b>Durée :</b> compte actif + 3 ans ; factures : 10 ans.</p>
<p><b>Vos droits :</b> accès, rectification, effacement, limitation, opposition, portabilité, en écrivant à [email à compléter]. Réclamation possible auprès de la CNIL (cnil.fr).</p>`],
cookies:['Politique de cookies',`<p>Ce site n’utilise <b>aucun cookie de suivi, de publicité ou de mesure d’audience</b>.</p>
<p>Il enregistre uniquement dans votre navigateur (stockage local) un jeton de connexion, strictement nécessaire pour rester connecté. Il est supprimé à la déconnexion. Ce stockage ne nécessite pas de consentement.</p>
<p class="t">Si des outils d’analyse ou un paiement en ligne réel (Stripe/PayPal) sont ajoutés plus tard, cette page et un bandeau de consentement devront être mis à jour.</p>`]};
function legal(k){const[t,b]=LG[k];$('#app').innerHTML=`<div class="card"><h2 style="margin-top:0">${t}</h2>${b}<p class="t">Dernière mise à jour : novembre 2026 — modèle à adapter et à faire relire avant un usage réel.</p><button class="s" onclick="go('home')">← Accueil</button></div>`}
