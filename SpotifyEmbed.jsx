import { findByDisplayName } from "@cumcord/modules/webpack";
import { React } from "@cumcord/modules/common";

const Embed = findByDisplayName("Embed");
export default function SpotifyEmbed(props) {
  const { embed } = props;
  console.log(embed)
  let iframesrc = embed.url.replace("https://open.spotify.com/", "https://embed.spotify.com/").split("?")[0] + "?theme=0"
  return (
    <iframe className="embedSpotify-1rDvOE embedWrapper-1MtIDg" src={iframesrc} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style={{ borderRadius:"12px",width: "500px", height: "80px"}}></iframe>
  );
}
