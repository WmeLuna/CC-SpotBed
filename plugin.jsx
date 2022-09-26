import { findByDisplayName } from "@cumcord/modules/webpack";
import { React } from "@cumcord/modules/common";
import { after } from "@cumcord/patcher";

import SpotifyEmbed from "./SpotifyEmbed";

const Embed = findByDisplayName("Embed", false);

let unpatch;

export function onLoad() {
  unpatch = after("render", Embed.default.prototype, function (_, ret) {
    const {embed} = ret.props
    
    if (embed?.provider?.name == "Spotify") {
        return (<SpotifyEmbed embed={embed}></SpotifyEmbed>)
    }
  });
}

export function onUnload() {
  unpatch();
}
