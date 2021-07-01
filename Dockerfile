FROM alpine
RUN apk add --no-cache \
        bash\
        jq\
        docker
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
