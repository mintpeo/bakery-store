# Dockerfile
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY . .
RUN ./mvnw package -DskipTests

CMD ["java", "-jar", "target/fullstackweb-0.0.1-SNAPSHOT.jar"]