FROM openjdk:11 as builder
WORKDIR /app
COPY ./ ./
RUN chmod +x ./gradlew
RUN ./gradlew build

FROM adoptopenjdk:11-jdk
COPY --from=builder build/libs/*.jar backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend.jar"]