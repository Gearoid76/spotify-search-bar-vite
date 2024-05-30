export const addTracksToPlaylist = async (playlistId, trackUris, accessToken) => { 
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
};

//export default playlist;