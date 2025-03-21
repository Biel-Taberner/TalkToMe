import React from "react";

export default function Container({ children }) {

    return (
        <div className="has-background-grey-lighter">
            <div className="container has-background-white">
                { children }
            </div>
        </div>
    )

}