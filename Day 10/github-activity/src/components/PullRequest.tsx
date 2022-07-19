import React from 'react';

export default function PullRequest(props: any) {
    return (
        <div className="item-commit">
            Related Links
            <div  className="item-pull-request">
                <div className="item-pull-request-message">
                   <a target={"_blank"} href={props.item.payload.pull_request.html_url}>Watch Pull Request</a> &nbsp; &nbsp;
                   <a target={"_blank"} href={props.item.payload.pull_request.html_url + "/files"}>Watch Code Difference</a>
                </div>
            </div>
        </div>
    )
}