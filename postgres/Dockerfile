FROM postgres:9.4

ENTRYPOINT []
CMD export POSTGRES_DB=guestbook; export POSTGRES_USER=$(cat /etc/secrets/username); export POSTGRES_PASSWORD=$(cat /etc/secrets/password) ;./docker-entrypoint.sh postgres;

