export const addTracksToPlaylist = async (accessToken, playlistId, trackUris) => { 
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: trackUris,
        }),
    });
    console.log('playlistId', playlistId);
};

