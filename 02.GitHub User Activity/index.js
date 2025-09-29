

async function fetchGitHubUserActivity(username) {
    console.log(username);
    const response = await fetch(`https://api.github.com/users/${username}/events/public`,
        {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'node.js'
            }
        }
    );
    console.log(response);
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`User ${username} not found`);

        } else {
            throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
    }

    return response.json();
};


function displayUserActivity(events) {
    if (events.length === 0) {
        console.log('No recent public activity found.');
        return;

    }
    events.forEach((event) => {
        let action;
        switch (event.type) {
            case 'PushEvent':
                const commitCount = event.payload.commits.length;
                action = `pushed ${commitCount} commit(s) to ${event.repo.name}`;
                break;
            case 'IssuesEvent':
                action = `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)}  issue #${event.payload.issue.number} in ${event.repo.name}`;
                break;
            case 'watchEvent':
                action = `starred ${event.repo.name}`;
                break;
            case 'ForkEvent':
                action = `forked ${event.repo.name}`;
                break;
            case 'createEvent':
                action = `created ${event.payload.ref_type} ${event.payload.ref} in ${event.repo.name}`;
                break;
            default:

                action = `performed ${event.type} on ${event.repo.name}`
                break
        }
        console.log(`-${action}`);
    });
}

const username = process.argv[2];
if (!username) {
    console.error('Please provide a GitHub username as a command-line argument.');
    process.exit(1);
}

fetchGitHubUserActivity(username)
    .then((events) => {
        console.log('Fetching activity for user:', username)
        displayUserActivity(events);

    })
    .catch((error) => {
        console.error('Error:', error.message);
        process.exit(1);
    });
