# Portfolio Tracker Frontend

Dette er Portfolio Tracker Frontend

Portfolio Tracker er et website, som giver overblik over Porteføljer og investeringer.

Det er et dynamisk website, hvor brugervenlighed er i centrum. Hjemmesiden er designet til at være responsive, hvilket betyder, at den automatisk tilpasser sig enhver skærmstørrelse, fra desktop til mobile enheder.

## Funktioner

- **Oprette Porteføljer:** Opret dine porteføljer
- **Redigere Porteføljer:** Rediger dine porteføljer
- **Oprette Handler/Transaktioner:** Opret dine handler / transaktioner
- **Redigere Handler/Transaktioner:** Rediger dine handler / transaktioner


## Teknologi

- **Frontend**: Next.js
- **Backend**: C# .NET
- **Database**: MsSQL
- **Deployment**: Docker

## Projekt Opsætning

### Lokalt

1. **Klon Repositoriet**

    ```
    git clone https://github.com/emilstorgaard/portfolio_tracker_frontend.git
    ```

2. change directory to the project folder

    ```
    cd portfolio_tracker_frontend
    ```

3. **Installer Dependencies**

    ```
    npm install
    ```

4. **Køre Portfolio Tracker API**

    <https://github.com/emilstorgaard/PortfolioTrackerAPI>

5. **Starte Projektet Lokalt**

    ```
    npm run dev
    ```

### Docker

For at bygge og køre projektet ved hjælp af Docker, følg disse trin:

1. **Byg Docker Image**

    ```
    docker build -t portfolio_tracker_frontend .
    ```

2. **Kør Containeren**

    ```
    docker run -p 8888:3000 portfolio_tracker_frontend
    ```

    Herefter er applikationen tilgængelig på `localhost:8888`.

© Emil Storgaard Andersen, 2024.
