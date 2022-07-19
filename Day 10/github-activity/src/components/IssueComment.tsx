import React from 'react';

export default function IssueComment(props: any) {
    return (
        <div className="item-commit">
            Related Issue
            <br />
            <div  className="item-pull-request">
                <h4>{props.item.payload.issue.title}</h4>
                <div className="item-issue-comment">
                   <a target={"_blank"} href={props.item.payload.issue.html_url}>Link To Issue</a>
                </div>
            </div>
        </div>
    )
}