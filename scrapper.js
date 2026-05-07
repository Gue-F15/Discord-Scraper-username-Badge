const { Client, MessageEmbed } = require('discord.js-selfbot-v13');
const axios = require('axios');
require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

const client = new Client();

client.on('ready', () => {
    console.log('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');
    console.log('dev By @Gue-F15');
    console.log('GitHub: https://github.com/Gue-F15');
    console.log('------------------------------------');
    console.log('░██████╗░██╗░░░██╗███████╗░░███╗░░██████╗░██████╗░███████╗');
    console.log('██╔════╝░██║░░░██║██╔════╝░████║░░╚════██╗╚════██╗╚════██║');
    console.log('██║░░██╗░██║░░░██║█████╗░░██╔██║░░░█████╔╝░█████╔╝░░░░██╔╝');
    console.log('██║░░╚██╗██║░░░██║██╔══╝░░╚═╝██║░░░╚═══██╗░╚═══██╗░░░██╔╝░');
    console.log('╚██████╔╝╚██████╔╝███████╗███████╗██████╔╝██████╔╝░░██╔╝░░');
    console.log('░╚═════╝░░╚═════╝░╚══════╝╚══════╝╚═════╝░╚═════╝░░░╚═╝░░░');
    console.log('_________________________________________');
    console.log('Starting the check...');
    console.log('------------------------------------');
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (newState.channel && !oldState.channel) {
        const member = newState.member;
        const channel = newState.channel;
        const guild = newState.guild;

        if (!channel.permissionsFor(guild.members.me).has('CONNECT')) {
            return;
        }

        const badges = member.user.flags?.toArray() || [];
        const username = member.user.username;
        const displayName = member.displayName;
        const serverName = guild.name;
        const avatarURL = member.user.displayAvatarURL({ dynamic: true });
        let channelLink = `https://discord.com/channels/${guild.id}/${channel.id}`;
        let membersCount = channel.members.size;

        const membersInChannel = channel.members.map(m => m.user.username).join('\n');

        if (
            badges.includes('EARLY_VERIFIED_BOT_DEVELOPER') || 
            badges.includes('EARLY_SUPPORTER') || 
            badges.includes('HYPESQUAD_EVENTS') || 
            username.length === 2 || username.length === 3
        ) {
            console.log('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');
            console.log(`%c[+] User found: ${username}`, 'color: green; font-weight: bold;');
            console.log(`%c[+] Server: ${serverName}`, 'color: orange; font-weight: bold;');
            console.log('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');
            console.log(' ');
            console.log(' ');

            console.log('%cdev By @Gue-F15', 'color: blue; font-weight: bold;');
            console.log('%cGitHub: https://github.com/gue1337', 'color: blue; font-weight: bold;');
            console.log(' ');

            let badgeText = badges.join(', ');

            const embed = new MessageEmbed()
                .setColor('#32CD32')
                .setTitle('User Found')
                .setDescription(`**User Info**:\n\n**Username**: \`${username}\`\n**Display Name**: \`${displayName}\`\n**Channel**: [Click Here](${channelLink})\n**Server**: \`${serverName}\`\n**Members in Channel**: ${membersCount}`)
                .addFields([
                    { name: '**Members\' Names**', value: membersInChannel || 'None', inline: false },
                    { name: '**Badges**', value: badgeText || 'None', inline: true }
                ])
                .setThumbnail(avatarURL)
                .setFooter({ text: 'https://github.com/Gue-F15' })
                .setTimestamp(false);

            const data = {
                content: '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀',
                embeds: [embed],
            };

            try {
                await axios.post(WEBHOOK_URL, data);
                console.log(`Webhook sent for user ${username}`);
            } catch (error) {
                console.error('Error sending webhook:', error);
            }
        } else {
            console.log('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');
            console.log(`%c[+] User not found: ${username}`, 'color: red; font-weight: bold;');
            console.log(`%c[+] Not found in server: ${serverName}`, 'color: red; font-weight: bold;');
            console.log('______________');
            console.log(' ');
            console.log(' ');
        }
    }
});

client.login(DISCORD_TOKEN);
