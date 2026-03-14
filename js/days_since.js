const url = "https://api.github.com/repos/thejhive/thejhive.github.io";
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
    })
    .then((result) => {
        const updatedDate = result.updated_at;
        const updatedMs = new Date(updatedDate).getTime();
        const msSinceUpdated = Date.now() - updatedMs;
        const daysSinceUpdated = Math.floor(msSinceUpdated / 8.64e+7);
        document.getElementById('days-since').innerHTML = `It has been ${daysSinceUpdated} days since this site was last updated`;
    })
    .catch(error => {
        document.getElementById('days-since').innerHTML = "It has been so long since this site was last updated that this code to check this has broken";
        console.log(error);
    });