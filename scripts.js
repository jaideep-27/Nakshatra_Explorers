// Fetching data from SpaceX API for upcoming space missions
document.addEventListener('DOMContentLoaded', () => {
    const missionsDiv = document.getElementById('missions-data');
    const nasaApiUrl = 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd';  // SpaceX API for upcoming launches

    fetch(nasaApiUrl)
        .then(response => response.json())
        .then(data => {
            let missionsHtml = '';
            data.slice(0, 5).forEach(mission => {
                missionsHtml += `
                    <div class="mission">
                        <h3>${mission.name}</h3>
                        <p>Date: ${new Date(mission.date_utc).toLocaleDateString()}</p>
                        <p>Rocket: ${mission.rocket}</p>
                    </div>
                `;
            });
            missionsDiv.innerHTML = missionsHtml;
        })
        .catch(error => {
            missionsDiv.innerHTML = '<p>Failed to fetch missions data.</p>';
            console.error('Error fetching data:', error);
        });
});
