#Symfony + React


## Prérequis

- PHP 8.0 ou supérieur
- npm pour le frontend en React
- MySQL


##Installation Back-end (Symfony)



1. Clonez le dépôt via le terminal

	git clone https://votre-repository.git

	cd backend

	cd api-symfony

2. Installez les dépendances PHP

	composer require webserver symfony/orm-pack symfony/maker-bundle

3. Configurez la BDD (Base de données) en modifiant le fichier env.

	DATABASE_URL="mysql://nomdutilisateur:motdepasse@127.0.0.1:3306/api_symfony"

4. Créez la BDD et exécutez les migrations

	php bin/console doctrine:database:create
	php bin/console doctrine:migrations:migrate

5. Lancer le serveur Symfony

	symfony server:start



##Installation Front-end (React)


1. Accédez au dossier frontend

	cd frontend

	cd teachr-app
 
2. Installez les dépendances 


	npm install
	
3. Démarrez le serveur React 

