let todayInCalifornia = new Intl.DateTimeFormat('en-US', {weekday: 'long', timeZone : 'America/Los_Angeles'}).format(new Date());
// because putting everything in one line is great for reading code later on wheeeeeeeee

if (todayInCalifornia == "Friday") {
    document.getElementById('friday').innerHTML = "YES";
    document.getElementById('friday-description').innerHTML = "Today is Friday in California. Shoot!"
} else {
    document.getElementById('friday').innerHTML = "NO";
    document.getElementById('friday-description').innerHTML = "Today is not Friday in California."
}