import React from "react";

interface BlockInfoProps {
    title: string;
    voiceProp: string;
}

export default function BlockInfo({ title, voiceProp } : BlockInfoProps) {

    return (
        <>
            <div className="title is-capitalized">{ title }</div>
            <div className="subtitle mt-3">
                The <code className="is-lowercase">{ title }</code> property of the <strong>SpeechSynthesisUtterance</strong> interface gets and sets the {voiceProp} at which the utterance will be spoken at.
            </div>
        </>
    )

}