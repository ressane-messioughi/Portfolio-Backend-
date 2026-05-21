# __ETAPE 1: Installation de Node Module__
> Ouvrir le terminal du dossier "/Portfolio-Backend"
> Executer la commande `npm install`

# __ETAPE 2: Paramétrage du fichier .env pour contenir les informations sensibles__ 
> Ce rendre dans le fichier .env qui ce trouve à la racine du dossier
> Remplir touts les champs requis 

# __ETAPE 3: Lancement du serveur ✅__
> Toujours dans le terminal du dossier "/Portfolio-Backend" Mise en marche du serveur Backend via la commande `npm run dev`

# __ETAPE 4: Création du compte "Admin"__

Une route dédiée à l'enregistrement d'utilisateurs est présente sur le projet 
Il suffit de ce rendre dans /src/routes/auth.route.js 
> Supprimer ou mettre la route en commantaire => `router.post("/register", valideRegister , validate ,authController.registerUser)`

# ⚠️ Attention ⚠️

Si la route est actif toute personne peut ce créer un compte avec le role "Admin"  ⚠️__Application non sécurisé__⚠️

Pour créer un compte nous avons deux possibilités : 

**Via la base de donnée (Requête SQL) =**

`INSERT INTO user (email, password, role, firstname, lastname)
VALUES (
  'MON_MAIL@MAIL.COM',
  'MON_PASSWORD.',
  'admin', -> "admin" ou "user" uniquement
  'MON_PRENOM',
  'MON_NOM'
);`

**Via Postman = **
Gestion de la requete :

`Method: POST  
URL: https://monsite.fr/api/auth/register (si localhost avec port 3000 http://localhost:3000/) 
BODY: 
{
"email": "MON_EMAIL",
"password": "MON_PASSWORD"
"firstname": "MON_PRENOM"
"lastname": "MON_NOM"
"role": "admin" ->  "admin" ou "user" uniquement 
}`
