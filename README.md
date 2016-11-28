# monAppJS

Ce projet est dans le cadre de mon master cloud computing & mobility dans l'étude des Amazon Web Services.

Lancement d'une instance t2.micro ubuntu 16.04 LTS dans la région eu-central-1.
Connexion à l'instance par SSH via l'user ubuntu et le DNS public de la machine une fois prête.
Automatisation de l'installation d'une copie d'un projet via git clone par github au lancement de l'instance.
Pour cela on doit créer un script dans le fichier user-data en paramètre de la commande de lancement de l'instance.
Mise en place d'un ELB (Elastic Load Balancer) sur la zone eu-central-1 qui écoute sur le port 80 et répartit les requêtes sur le port 80 des instances.
La même chose en passant par l'interface web.

Mise en place de l'Autoscaling AWS afin de s'adapter à la charge entrante et optimiser le coût.

















