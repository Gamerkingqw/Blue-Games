const fetch = require('node-fetch');

async function getDiscordAvatar(userId, token) {
const res = await fetch(`https://discord.com/api/v10/users/${userId}`, {
headers: { Authorization: `Bot ${token}` }
});
if (!res.ok) throw new Error(`Error: ${res.statusText}`);
const user = await res.json();
return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;
}

(async () => {
const avatarUrl = await getDiscordAvatar('USER_ID', 'BOT_TOKEN');
console.log('Avatar URL:', avatarUrl);
})();