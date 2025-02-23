# Main Notes:

    1. Migration command used to create the database:
        npx prisma migrate dev --name "init"
    2. Command to seed the database:
        npx prisma db seed

# Misc Notes:

    Prerequisites:
        - Node.js
        - Docker

    Running application:
        1. In terminal 1: npm run start:dev
        2. Open Docker Desktop
        3. In terminal 2: docker-compose up
        4. open localhost:3000

    Guide used for application creation:
        https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
