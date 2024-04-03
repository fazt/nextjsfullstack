### Steps to run the app:

1) In the terminal: npm install
2) In the terminal: docker-compose up -d
3) Recreate the .env file with the .env.template file and Docker variables.
4) In the terminal: npx prisma migrate dev --name init
5) In the terminal: npm run dev
